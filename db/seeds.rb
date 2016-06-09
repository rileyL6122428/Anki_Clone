# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

j1_id = PublicDeck.create(name: "Japanese 1",
                          description: "Basic Japanese Phrases").id

PublicFlashcard.create([
  { front: "初めまして", back: "Nice to meet you", deck_id: j1_id },
  { front: "こんにちは", back: "Good afternoon", deck_id: j1_id },
  { front: "さようなら", back: "Good bye", deck_id: j1_id },
  { front: "今晩は", back: "Good evening", deck_id: j1_id }
])

j2_id = PublicDeck.create(name: "Japanese 2",
                          description: "Basic Japanese Phrases").id

  PublicFlashcard.create([
    { front: "またね~", back: "See you later", deck_id: j2_id },
    { front: "お幾らですか", back: "How much?", deck_id: j2_id },
    { front: "~ ですか", back: "Is ~ true?", deck_id: j2_id },
    { front: "ありがとう", back: "Thanks", deck_id: j2_id },
  ])

s1_id = PublicDeck.create(name: "Spanish 1",
                          description: "Basic Spanish Phrases").id

PublicFlashcard.create([
  { front: "Si", back: "Yes", deck_id: s1_id },
  { front: "No", back: "No", deck_id: s1_id },
  { front: "Por favor", back: "Please?", deck_id: s1_id },
  { front: "Gracias", back: "Thank you", deck_id: s1_id },
])

s2_id = PublicDeck.create(name: "Spanish 2",
                          description: "Basic Spanish Phrases").id

PublicFlashcard.create([
  { front: "Hola", back: "Hello", deck_id: s2_id },
  { front: "Buenas tardes", back: "Good evening", deck_id: s2_id },
  { front: "De nada", back: "Your welcome", deck_id: s2_id },
  { front: "Adios", back: "Goodbye", deck_id: s2_id },
])
