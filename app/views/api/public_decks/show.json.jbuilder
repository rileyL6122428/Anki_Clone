json.publicDeck @public_deck, :id, :name, :description


json.cards do
  json.array! @public_deck.cards[0..3] do |card|
    json.front card.front
    json.back card.back
  end
end
