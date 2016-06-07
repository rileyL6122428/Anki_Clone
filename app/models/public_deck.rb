class PublicDeck < ActiveRecord::Base
  validates :name, presence: true

  has_many(
    :cards,
    foreign_key: :deck_id,
    class_name: "PublicFlashcard"
  )
end
