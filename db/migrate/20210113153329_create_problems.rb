class CreateProblems < ActiveRecord::Migration[6.0]
  def change
    create_table :problems do |t|
      t.string :answer
      t.string :wrong_answer_1
      t.string :wrong_answer_2
      t.string :wrong_answer_3
      t.text :question

      t.belongs_to :topic, index: true, foreign_key: true

      t.timestamps
    end
  end
end
