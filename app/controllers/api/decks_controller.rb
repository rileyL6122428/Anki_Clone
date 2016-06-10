class Api::DecksController < ApplicationController
  #TODO sanitize Query inputs ??? IMPORTANT

  def create
    if params[:download]
      @deck = download_deck
      render 'api/decks/show'
    else
      @deck = Deck.new(deck_params)
      @deck.review_total = 0;
      @deck.owner_id = current_user.id
      if @deck.save
        render 'api/decks/show'
      else
        @errors = @deck.errors.full_messages
        render 'api/shared/error', status: 422
      end
    end

  end

  def index
    # TODO change the following lookup to rely on current_user.id after
    # you have set up your front end
    # @decks = Deck.where(owner_id: params[:current_user_id])
    @decks = Deck.where(owner_id: current_user.id).includes(:cards, :reviews)
    render 'api/decks/index'
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update(deck_params)
      render 'api/decks/show'
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    if @deck.destroy
      render 'api/decks/show'
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def show
    @deck = Deck.where(id: params[:id]).includes(:cards, :reviews).first
    if @deck
      render 'api/decks/show'
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  private
  def deck_params
    params.require(:deck).permit(:name, :description)
  end

  def download_deck
    #TODO finish this
    deck_to_download = PublicDeck.where(id: params[:id]).includes(:cards).first
    new_user_deck = Deck.new(deck_to_download.instantiation_params)
    new_user_deck.owner_id = current_user.id
    new_user_deck.review_total = 0
    new_user_deck.save

    new_flashcards_params = []
    deck_to_download.cards.each do |card|
      new_flashcards_params.push({
        front: card.front,
        back: card.back,
        deck_id: new_user_deck.id,
        grade: 0,
        review_total: 0
        })
    end
    Flashcard.create(new_flashcards_params)
    Deck.where(id: new_user_deck.id).includes(:cards).first
  end

end
