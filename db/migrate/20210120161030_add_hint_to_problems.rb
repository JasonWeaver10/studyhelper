class AddHintToProblems < ActiveRecord::Migration[6.0]
  def change
    add_column :problems, :hint, :string
  end
end
