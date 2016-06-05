json.name @deck.name
json.description @deck.description
json.reviewTotal @deck.review_total
json.id @deck.id
json.grade Deck.calculate_grade(@deck.cards)
json.cardTotal @deck.cards.length
