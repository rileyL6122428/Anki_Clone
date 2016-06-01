class CreateFlashcards < ActiveRecord::Migration
  def change
    create_table :flashcards do |t|
      t.integer :deck_id, null: false
      t.string :front, null: false
      t.string :back, null: false
      t.float :grade, null: false
      t.integer :review_total, null: false

      t.timestamps null: false
    end
    add_index :flashcards, :deck_id
  end
end
