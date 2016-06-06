
json.array! @decks do |deck|
  json.id deck.id
  json.name deck.name
  json.description deck.description
  json.reviewTotal deck.review_total
  json.grade Deck.grade(deck.cards)
  json.gradeDistribution Deck.grade_distribution(deck.cards)
  json.cardTotal deck.cards.length
end
