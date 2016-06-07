class PublicDeck < ActiveRecord::Base
  validates :name, presence: true

  has_many(
    :cards,
    foreign_key: :deck_id,
    class_name: "PublicFlashcard"
  )

  def instantiation_params
    { name: name, description: description }
  end
end
