class Api::ReviewsController < ApplicationController

  def create
    review = Review.new(deck_id: params[:deck_id])

    if review.save!
      update_card_and_deck_grades
      render "api/reviews/create"
    else
      @errors = review.errors.full_messages
      render "api/shared/errors"
    end
  end

  private

  def update_card_and_deck_grades
    reviewed_deck = Deck.find(params[:deck_id])
    deck_cards = reviewed_deck.cards
    cards = cards_to_be_graded(deck_cards)
    new_grades = grade_update_hash(cards)

    @flashcards = Flashcard.update(new_grades.keys, new_grades.values)
    @deck = reviewed_deck.update_grade
  end

  def cards_to_be_graded(cards)
    cards.select { |card| params[:review_grades].keys.include?(card.id.to_s) }
  end

  def grade_update_hash(cards)
    grades = {}
    review_grades = params[:review_grades]
    cards.each do |card|
      grades[card.id] = {
        "grade" => card.compute_new_grade(review_grades[card.id.to_s].to_f),
        "review_total" => card.review_total + 1
      }
    end
    grades
  end

end
