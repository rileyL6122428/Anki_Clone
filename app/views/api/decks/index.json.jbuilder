json.array! @decks do |deck|
  json.id deck.id
  json.name deck.name
  json.description deck.description
  json.review_total deck.review_total
  json.grade deck.grade
  json.cardTotal deck.card_total
end 
