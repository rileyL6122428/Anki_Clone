class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)
    @deck.review_total = 0;
    # TODO change the following lookup to rely on current_user.id after
    # you have set up your front end
    @deck.owner_id = params[:current_user_id]
    if @deck.save
      render 'api/decks/show'
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def index
    # TODO change the following lookup to rely on current_user.id after
    # you have set up your front end
    @decks = Deck.where(owner_id: params[:current_user_id])
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
    @deck = Deck.find(params[:id])
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
end
