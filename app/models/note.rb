# == Schema Information
#
# Table name: notes
#
#  id         :bigint           not null, primary key
#  title      :string
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class Note < ApplicationRecord
  belongs_to :user, optional: true
  validates :title, presence: true
  validates :content, presence: true
end
