class CreatePublicFlashcards < ActiveRecord::Migration
  def change
    create_table :public_flashcards do |t|
      t.integer :deck_id, null: false
      t.text :front, null: false
      t.text :back, null: false
    end
    add_index :public_flashcards, :deck_id
  end
end
