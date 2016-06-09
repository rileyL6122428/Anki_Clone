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

k1_id = PublicDeck.create(name: "Korean 1",
                          description: "Basic Korean Phrases").id

PublicFlashcard.create([
  { front: "반갑습니다", back: "Nice to meet you", deck_id: k1_id },
  { front: "감사합니다", back: "Thank you", deck_id: k1_id },
  { front: "잠시만요", back: "Excuse me", deck_id: k1_id },
  { front: "최성합니다/미안합니다", back: "I’m sorry", deck_id: k1_id },
])

k2_id = PublicDeck.create(name: "Korean 2",
                          description: "Basic Korean Phrases").id

PublicFlashcard.create([
  { front: "이것", back: "This one", deck_id: k2_id },
  { front: "맥주/소주", back: "Beer/Soju", deck_id: k2_id },
  { front: "오른", back: "Right", deck_id: k2_id },
  { front: "왼", back: "Left", deck_id: k2_id },
])

i1_id = PublicDeck.create(name: "Italian 1",
                          description: "Basic Italian Phrases").id

PublicFlashcard.create([
  { front: "Grazie", back: "Thank you", deck_id: i1_id },
  { front: "Prego", back: "Your're welcome", deck_id: i1_id },
  { front: "Per favore", back: "Please", deck_id: i1_id },
  { front: "Mi scusi", back: "Excuse me", deck_id: i1_id },
])

i2_id = PublicDeck.create(name: "Italian 2",
                          description: "Basic Italian Phrases").id

PublicFlashcard.create([
  { front: "Non capisco", back: "I don't understand", deck_id: i2_id },
  { front: "Parla inglese", back: "Do you speak English?", deck_id: i2_id },
  { front: "Ripeta, per favore", back: "Repeat, please.", deck_id: i2_id },
  { front: "Come va?", back: "How are you?", deck_id: i2_id },
])

t1_id = PublicDeck.create(name: "Trigonometry 1",
                          description: "Basic Trig Identities").id

PublicFlashcard.create([
  { front: "sin(x) = ?", back: "1 / csc(x)", deck_id: t1_id },
  { front: "cos(x) = ?", back: "1 / sec(x)", deck_id: t1_id },
  { front: "tan(x) = ?", back: "1 / cot(x)", deck_id: t1_id },
  { front: "sin^2(x) + cos^2(x) = ?", back: "1", deck_id: t1_id },
])

t2_id = PublicDeck.create(name: "Trigonometry 2",
                          description: "Basic Trig Identities").id

PublicFlashcard.create([
  { front: "O / H", back: "sin(x)", deck_id: t2_id },
  { front: "A / H", back: "cos(x)", deck_id: t2_id },
  { front: "O / A", back: "tan(x)", deck_id: t2_id },
  { front: "A / O", back: "cotan(x)", deck_id: t2_id },
])

g1_id = PublicDeck.create(name: "Geometry 1",
                          description: "Basic Geometries Fromulas").id

PublicFlashcard.create([
  { front: "Square: Area?", back: "s^2", deck_id: g1_id },
  { front: "Rect: Area?", back: "w * l", deck_id: g1_id },
  { front: "Circle: Area?", back: "pi * r^2", deck_id: g1_id },
  { front: "Ellipse: Area?", back: "pi * r_1 * r_2", deck_id: g1_id },
])

g2_id = PublicDeck.create(name: "Geometry 2",
                          description: "Basic Geometries Fromulas").id

PublicFlashcard.create([
  { front: "Triangle: Area?", back: "h * b * .5", deck_id: g2_id },
  { front: "Parallelogram: Area?", back: "b * h", deck_id: g2_id },
  { front: "Sphere: volume", back: "(4 / 3) * pi * r^3", deck_id: g2_id },
  { front: "Cube: volume", back: "s * 3", deck_id: g2_id },
])

s1_id = PublicDeck.create(name: "Swedish 1",
                          description: "Basic Swedish Phrases").id

PublicFlashcard.create([
  { front: "ja", back: "yes", deck_id: s1_id },
  { front: "nej", back: "no", deck_id: s1_id },
  { front: "tack", back: "please", deck_id: s1_id },
  { front: "ingen orsak", back: "you're welcome", deck_id: s1_id },
])

s2_id = PublicDeck.create(name: "Swedish 2",
                          description: "Basic Swedish Phrases").id

PublicFlashcard.create([
  { front: "hej", back: "hello", deck_id: s2_id },
  { front: "god natt", back: "goodnight", deck_id: s2_id },
  { front: "vi ses snart!", back: "see you soon!", deck_id: s2_id },
  { front: "ha en bra dag!", back: "have a good day!", deck_id: s2_id },
])

f1_id = PublicDeck.create(name: "French 1",
                          description: "Basic French Phrases").id

PublicFlashcard.create([
  { front: "Bonjour", back: "Hello", deck_id: f1_id },
  { front: "Bonsoir", back: "Good evening", deck_id: f1_id },
  { front: "Good night", back: "Bonne nuit", deck_id: f1_id },
  { front: "Good bye", back: "Au revoir", deck_id: f1_id },
])

f2_id = PublicDeck.create(name: "French 2",
                          description: "Basic French Phrases").id

PublicFlashcard.create([
  { front: "Thank you", back: "Merci", deck_id: f2_id },
  { front: "You're welcome", back: "Je vous en prie", deck_id: f2_id },
  { front: "See you later", back: "A plus tard", deck_id: f2_id },
  { front: "No", back: "Non", deck_id: f2_id },
])

p1_id = PublicDeck.create(name: "Physics 1",
                          description: "Basic Physics 1").id

PublicFlashcard.create([
  { front: "Momentum", back: "p = m * v", deck_id: p1_id },
  { front: "Net Force", back: "f = m * a", deck_id: p1_id },
  { front: "Velocity", back: "v = dx / dt", deck_id: p1_id },
  { front: "Acceleration", back: "a = dv / dt", deck_id: p1_id },
])

v1_id = PublicDeck.create(name: "Vectors 1",
                          description: "Basic Vectors 1").id

PublicFlashcard.create([
  { front: "Magnitude", back: "(x^2 + y^2)^(1/2)", deck_id: v1_id },
  { front: "Unit Vector", back: "v / |v|", deck_id: v1_id },
  { front: "Dot Product", back: "x1 * x2 + y1 * y2", deck_id: v1_id },
  { front: "Dot Product of Orthogonal Vectors", back: "0", deck_id: v1_id },
])

User.create({ username: "Guest", password: "password" })
