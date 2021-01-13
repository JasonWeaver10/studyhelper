class CreateTopics < ActiveRecord::Migration[6.0]
  def change
    create_table :topics do |t|
      t.string :name 
      t.integer :high_score

      t.belongs_to :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
