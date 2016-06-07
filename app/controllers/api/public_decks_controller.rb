class Api::PublicDecksController < ApplicationController
  def index
    @public_decks = PublicDeck.all
  end

  def show
    @public_deck = PublicDeck.where(id: params[:id]).includes(:cards).first
  end
end
