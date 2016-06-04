
json.review do
  json.flashcards do
    json.array! @flashcards, :id, :grade, :review_total
  end
  json.deck do
    json.id @deck.id
    json.grade @deck.grade
    json.review_total @deck.review_total
  end
end
