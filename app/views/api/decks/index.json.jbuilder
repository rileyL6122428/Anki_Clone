json.array! @decks do |deck|
  json.id deck.id
  json.name deck.name
  json.description deck.description
  json.reviewTotal deck.review_total
  json.grade Deck.calculate_grade(deck.cards)
  json.cardTotal deck.cards.length
end
