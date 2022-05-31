FactoryBot.define do
  factory :random_note, class: Note do
    title { Faker::Lorem.question }
    content  { Faker::Lorem.sentence }
  end
end