class Deck < ActiveRecord::Base
  validates :name, :description, :owner_id, :review_total, presence: true

  belongs_to(
    :user,
    foreign_key: :owner_id,
    class_name: "User"
  )

  has_many(
    :cards,
    foreign_key: :deck_id,
    class_name: "Flashcard"
  )

  has_many(
    :reviews,
    foreign_key: :deck_id,
    class_name: "Review"
  )

  def self.calculate_grade(cards)
    return 0.0 if cards.empty?
    grade_total = cards.inject(0) { |total, card| card.grade + total }
    grade_total / cards.length
  end

  def update_grade
    self.review_total += 1
    self.save
    self
  end
end
