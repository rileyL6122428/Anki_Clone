json.review do
  json.flashcards do
    json.array! @flashcards do |card|
      json.id card.id
      json.grade card.grade
      json.reviewTotal card.review_total
    end
  end
  json.deck do
    json.name @deck.name
    json.description @deck.description
    json.reviewTotal @deck.review_total
    json.id @deck.id
    json.grade Deck.grade(@deck.cards)
    json.gradeDistribution Deck.grade_distribution(@deck.cards)
    json.reviewsToday Deck.reviews_today(@deck.reviews)
    json.reviewsPerDay Deck.reviews_per_day(@deck.reviews)
    json.reviewTotal @deck.review_total
    json.cardTotal @deck.cards.length
  end
end
