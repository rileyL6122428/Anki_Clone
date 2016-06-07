json.array! @public_decks do |deck|
   json.id deck.id
   json.name deck.name
   json.description deck.description
   json.cardPreview do
     json.array! deck.cards[0..3] do |card|
       json.front card.front
       json.back card.back
       json.id card.id
     end
   end
   json.cardTotal deck.cards.length
end
