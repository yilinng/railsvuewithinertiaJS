require 'rails_helper'

RSpec.describe 'user login', type: :request do

  let!(:user) { FactoryBot.create(:user) }

  describe 'POST /login' do

    context "with valid credentials" do
      it 'redirects to homepage' do
        post '/login', 
          params: { session: { email: user.email, password: user.password } }
        expect(response).to redirect_to root_path
      end
    end

    context "with invalid credentials" do 
      it "does not redirect the user" do 
        post '/login',
          params: { session: { email: user.email, password: "notrightpassword" } }
        expect(response).to_not redirect_to root_path
        expect(response.body).to include("Invalid email or password")  
      end
    end
   
  end
end