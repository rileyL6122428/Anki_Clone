json.reviews do
  json.array! @reviews do |review|
    json.createdAt (review.created_at.to_i * 1000) #NOTE * 1000 is necessary for
    json.id review.id                              #date instantation on the
  end                                              #frontend
end

json.total @reviewTotal
