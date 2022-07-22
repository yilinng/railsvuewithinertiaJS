FactoryBot.define do
  factory :user, class: User do
    username {"John Doe"}
    email { Faker::Internet.email }
    password  { "test" }
  end
end