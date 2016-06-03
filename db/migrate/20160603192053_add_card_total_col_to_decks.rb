class AddCardTotalColToDecks < ActiveRecord::Migration
  def change
    add_column :decks, :card_total, :integer
  end
end
