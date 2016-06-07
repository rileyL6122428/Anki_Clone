class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :deck_id, null: false
      t.timestamps null: false
    end

    add_index :reviews, :deck_id
  end
end
