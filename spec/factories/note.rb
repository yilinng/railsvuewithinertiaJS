FactoryBot.define do
  factory :random_note, class: Note do
    title { Faker::Lorem.sentence }
    content  { Faker::Lorem.paragraph }
  end
end