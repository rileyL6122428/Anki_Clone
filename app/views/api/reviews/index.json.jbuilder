# byebug
json.array! @reviews do |review|
  json.createdAt (review.created_at.to_i * 1000)
  json.id review.id
end
