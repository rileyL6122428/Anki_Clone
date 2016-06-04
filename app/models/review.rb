class Review < ActiveRecord::Base
  validates :deck_id, presence: true

  belongs_to(
    :deck,
    foreign_key: :deck_id,
    class_name: "Deck"
  )
end
