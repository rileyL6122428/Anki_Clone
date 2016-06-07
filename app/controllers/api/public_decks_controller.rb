class Api::PublicDecksController < ApplicationController
  def index
    if params[:query].empty?
      @public_decks = []
    else
      @public_decks = PublicDeck.where("name LIKE ?", params[:query]).includes(:cards)
    end
  end

  def show
    @public_deck = PublicDeck.where("id = ?", params[:id]).includes(:cards).first
  end
end
