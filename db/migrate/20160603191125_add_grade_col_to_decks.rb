class AddGradeColToDecks < ActiveRecord::Migration
  def change
    add_column :decks, :grade, :float
  end
end
