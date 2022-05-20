class AddUserToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :user, :string
  end
end
