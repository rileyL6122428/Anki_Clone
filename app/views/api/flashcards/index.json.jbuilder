json.array! @flashcards do |card| 
  json.id card.id
  json.front card.front
  json.back card.back
  json.grade card.grade
  json.reviewTotal card.review_total
end
