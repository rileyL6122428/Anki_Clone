class Deck < ActiveRecord::Base
  validates :name, :description, :owner_id, :review_total, :grade, presence: true

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

  def update_grade
    grade_sum = 0;

    cards.each { |card| grade_sum += card.grade }
    self.grade = grade_sum / cards.length
    self.review_total += 1
    self.save

    self
  end
end
