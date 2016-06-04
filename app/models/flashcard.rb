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

  def compute_new_grade(review_grade)
    previous_total_grade = self.grade
    if previous_total_grade < review_grade
      0.85 * previous_total_grade + 0.15 * review_grade
    else
      0.85 * review_grade + 0.15 * previous_total_grade
    end
  end

end
