require 'rails_helper'

RSpec.describe 'user auth', type: :request do

  #let!(:user) { create(:user) }

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

    it 'update /notes/9' do
      put "/notes/9", params: {
        note: {
          "title"=>"inertia_rails", 
          "content"=>"Rails 7 specific frontend docs coming soon. For now."
        } 
      }
    end

    it 'show /notes/9' do
      get "/notes/9"
      expect_inertia.to include_props({:note=>
        {"id"=>9, "title"=>"inertia_rails", 
        "content"=>"Rails 7 specific frontend docs coming soon. For now."}}
      )
    end  

  #  it 'delete note' do
  #    delete "/notes/8"
  #  end

    it 'show note list' do
      get "/notes"

      expect_inertia.to include_props({ 
        :notes=>[     
          {"id"=>10, "title"=>"test123 from respec", "content"=>"test here"},
          {"id"=>9, "title"=>"inertia_rails", "content"=>"Rails 7 specific frontend docs coming soon. For now."}
          ]
      })
    end

=begin
    it 'post note' do
      post "/notes", params: { 
        note: {
          title: "test12 from respec", 
          content: "Assertions"
        } 
      }
      expect_inertia.to include_props({ flash: {
        notice: "Note was successfully created."
      }})
     
    end
=end
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
    @user = {username: user.username, email: user.email, password: user.password}
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