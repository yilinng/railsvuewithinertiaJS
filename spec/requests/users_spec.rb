require 'rails_helper'

RSpec.describe 'user auth', type: :request do

  #let!(:user) { FactoryBot.create(:user) }

  describe 'POST/Login with valid parameters', inertia: true do
    before do
      @user = {email: "test12@test.com", password: "test12"}
      login_as(@user)
    end

    it 'login success' do
      expect_inertia.to include_props({ flash: {
        notice: "Logged in successfully."
      }})
    end

  end

  
  describe 'POST/Login with invalid parameters', inertia: true do
    before do
      @user = {email: "test12@test.com", password: "test12sss"}
      login_as(@user)
    end

    it 'login fail' do
      expect_inertia.to include_props({ flash: {
        alert: "Invalid email or password."
      }})
    end

  end

=begin
describe 'POST/Signup', inertia: true do    
  before do
    @user = {username: "rspec svt", email: "test135@test.com", password: "test13"}
    post '/signup', params: @user
  end

  it 'signup success' do
    expect_inertia.to include_props({ flash: {
      notice: "Signup in successfully."
    }})
  end
       
end
=end   
end