class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.integer :review_total, null: false

      t.timestamps null: false
    end

    add_index :decks, :owner_id
  end
end
