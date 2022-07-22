require 'rails_helper'

RSpec.describe "note page", type: :request do

  let!(:user) { FactoryBot.create(:user) }
  let!(:note) { FactoryBot.create_list(:random_note, 20)}


  describe 'GET/index', inertia: true do
    before do
      FactoryBot.create_list(:random_note, 20)
      get '/notes'#, headers: auth_headers(user)
    end

    it 'show notes' do
      puts response.body
      #expect_inertia.to have_exact_props({name: 'Brandon', sport: 'hockey'})
    end
  end

=begin  
    it 'vaild auth' do
      get "/notes", 
        headers: { 'HTTP_AUTHORIZATION' => ActionController::HttpAuthentication::Basic.encode_credentials(user.email, user.password) }
      expect(response).to have_http_status(302)

      post "/notes", 
        headers: { 'HTTP_AUTHORIZATION' => ActionController::HttpAuthentication::Basic.encode_credentials(user.email, user.password) },
        :params => {:note => {:title => "seventeen", :content => "SEVENTEEN ON FACE THE SUN & THE START OF A NEW ERA."}} 
      expect(response).to have_http_status(302)
      
      follow_redirect!

      expect(response).to have_http_status(:success)
    end
=end
    it 'invaild auth' do
      get "/notes"
      #expect(response).to redirect_to login_path  
    end
end