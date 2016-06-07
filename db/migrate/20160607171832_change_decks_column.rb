class ChangeDecksColumn < ActiveRecord::Migration
  def change
    change_column :decks, :description, :text, :null => true
  end
end
