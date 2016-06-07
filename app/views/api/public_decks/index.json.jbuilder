json.array! @public_decks do |deck|
   json.id deck.id
   json.name deck.name
   json.description deck.description
   json.cards do
     json.array! deck.cards do |card|
       json.front card.front
       json.back card.back
       json.id card.id
     end
   end
end
