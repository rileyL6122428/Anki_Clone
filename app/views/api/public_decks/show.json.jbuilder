json.publicDeck @public_deck, :id, :name, :description


json.cards do
  json.array! @public_deck.cards do |card|
    json.front card.front
    json.back card.back
    json.id card.id
  end
end
