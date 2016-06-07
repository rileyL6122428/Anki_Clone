class CreatePublicDecks < ActiveRecord::Migration
  def change
    create_table :public_decks do |t|
      t.string :name, null: false
      t.text :description
    end
  end
end
