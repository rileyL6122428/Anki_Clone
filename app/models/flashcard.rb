class Flashcard < ActiveRecord::Base
  validates :deck_id, :front, :back, :grade, :review_total, presence: true
  
  validates :grade, numericality: {
    greater_than_or_equal_to: 0,
    less_than_or_equal_to: 100
  }

  belongs_to(
    :deck,
    foreign_key: :deck_id,
    class_name: "Deck"
  )


end
