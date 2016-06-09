class Api::PublicDecksController < ApplicationController
  def index
    if params[:query].empty?
      @public_decks = []
    else
      handle_query
    end
  end

  def show
    @public_deck = PublicDeck.where("id = ?", params[:id]).includes(:cards).first
  end

  private
  def handle_query
    q1 = "%#{params[:query]}%"
    q2 = "%#{params[:query].downcase}%"
    q3 = "%#{params[:query].upcase}%"
    q4 = "%#{params[:query].capitalize}%"
    query = "name LIKE ? OR name LIKE ? OR name LIKE ? OR name LIKE ?"

    @public_decks = PublicDeck.where(query, q1, q2, q3, q4).includes(:cards)
  end
end
