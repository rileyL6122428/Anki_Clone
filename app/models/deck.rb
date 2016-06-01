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
  
end
