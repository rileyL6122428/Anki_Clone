class Api::ReviewsController < ApplicationController

  def index
    destroy_reviews_over_a_week_old
    gather_up_review_data_for_view
    render "api/reviews/index"
  end

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

  def calculate_total(user)
    total = 0;
    user.decks.each { |deck| total += deck.review_total }
    total
  end

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

  def destroy_reviews_over_a_week_old
    six_days_ago = Time.now - 60 * 60 * 24 * 6
    cut_off = Time.new(six_days_ago.year, six_days_ago.month, six_days_ago.day)
    cut_off_string = cut_off.to_s.match(/\S+/).to_s
    Review.delete_all(["created_at < ?", cut_off])
  end

  def gather_up_review_data_for_view
    user = User.where(id: current_user.id).includes(:reviews, :decks).first
    @reviews = user.reviews
    @reviewTotal = calculate_total(user)
    # NOTE, this cannot be calculated from
    # the review table because reviews over
    # a week old are destroyed
  end

end
