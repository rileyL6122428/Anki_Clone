class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)
    @deck.review_total = 0;
    if @deck.save
      render 'api/decks/show'
    else
      @errors = @deck.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def index
    @decks = Deck.where(deck_id: current_user.id)
    render 'api/decks/index'
  end

  def edit
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
    if !@deck.empty?
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
