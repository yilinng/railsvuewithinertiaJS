class RemoveUserFromNotes < ActiveRecord::Migration[6.1]
  def change
    remove_column :notes, :user, :string
  end
end
