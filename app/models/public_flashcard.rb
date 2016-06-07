class PublicFlashcard < ActiveRecord::Base
  validates :deck_id, :front, :back, presence: true

  belongs_to(
    :deck,
    foreign_key: :deck_id,
    class_name: "PublicDeck"
  )

end
