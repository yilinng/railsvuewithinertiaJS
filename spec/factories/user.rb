FactoryBot.define do
  sequence :email do |n|
    "person#{n}@example.com"
  end
end

FactoryBot.define do
  factory :user, class: User do
    username {"John Doe"}
    email { email }
    password  { "test" }
  end
end