json.id @public_deck.id
json.name @public_deck.name
json.description @public_deck.description
json.cardPreview do
 json.array! @public_deck.cards[0..3] do |card|
   json.front card.front
   json.back card.back
   json.id card.id
 end
end
json.cardTotal @public_deck.cards.length
