json.review do
  json.flashcards do
    json.array! @flashcards do |card|
      json.id card.id
      json.grade card.grade
      json.reviewTotal card.review_total
    end
  end
  json.deck do
    json.id @deck.id
    json.grade Deck.grade(@flashcards)
    json.reviewTotal @deck.review_total
  end
end
