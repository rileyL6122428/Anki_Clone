class Deck < ActiveRecord::Base
  validates :name, :owner_id, :review_total, presence: true

  belongs_to(
    :user,
    foreign_key: :owner_id,
    class_name: "User"
  )

  has_many(
    :cards,
    foreign_key: :deck_id,
    class_name: "Flashcard",
    dependent: :destroy
  )

  has_many(
    :reviews,
    foreign_key: :deck_id,
    class_name: "Review",
    dependent: :destroy
  )

  def self.grade_distribution(cards)
    distribution = Array.new(7) { 0 }
    cards.each do |card|
      distribution[grade_distribution_idx(card.grade)] += 1
    end
    distribution
  end

  def self.grade(cards)
    return 0.0 if cards.empty?
    grade_total = cards.inject(0) { |total, card| card.grade + total }
    grade_total / cards.length
  end

  def self.grade_distribution_idx(grade)
    return 0 if grade == 0
    return 1 if grade < 50
    return 2 if grade < 60
    return 3 if grade < 70
    return 4 if grade < 80
    return 5 if grade < 90
    return 6 if grade < 100
  end

  def self.reviews_today(reviews)
    todays_date = Time.now
    todays_start = Time.new(todays_date.year, todays_date.month, todays_date.day)
    reviews.select{ |review| review.created_at > todays_start }.length
  end

  def self.reviews_per_day(reviews)
    reviews.length / 7
  end


  def update_grade
    self.review_total += 1
    self.save
    self
  end

end
