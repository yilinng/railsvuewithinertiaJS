require "rails_helper"

RSpec.describe "note page", type: :feature do

  let!(:user) { FactoryBot.create(:user) }

  scenario "user can see note list" do
    visit "/notes"
    expect(page).to have_http_status(:success)
  end

end