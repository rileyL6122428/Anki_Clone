# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160626224848) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorizations", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.string   "token"
    t.string   "secret"
    t.string   "name"
    t.string   "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "decks", force: :cascade do |t|
    t.string   "name",         null: false
    t.text     "description"
    t.integer  "owner_id",     null: false
    t.integer  "review_total", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "decks", ["owner_id"], name: "index_decks_on_owner_id", using: :btree

  create_table "flashcards", force: :cascade do |t|
    t.integer  "deck_id",      null: false
    t.string   "front",        null: false
    t.string   "back",         null: false
    t.float    "grade",        null: false
    t.integer  "review_total", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "flashcards", ["deck_id"], name: "index_flashcards_on_deck_id", using: :btree

  create_table "public_decks", force: :cascade do |t|
    t.string "name",        null: false
    t.text   "description"
  end

  create_table "public_flashcards", force: :cascade do |t|
    t.integer "deck_id", null: false
    t.text    "front",   null: false
    t.text    "back",    null: false
  end

  add_index "public_flashcards", ["deck_id"], name: "index_public_flashcards_on_deck_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "deck_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["deck_id"], name: "index_reviews_on_deck_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "session_token"
    t.string   "email",                  default: ""
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.string   "facebook_uid"
  end

  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
