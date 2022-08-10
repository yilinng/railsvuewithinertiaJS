class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.references :user
      t.integer :likes_count, default: 0

      t.timestamps
    end
  end
end
