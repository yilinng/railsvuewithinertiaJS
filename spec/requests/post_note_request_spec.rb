require 'rails_helper'

RSpec.describe "post a note", type: :request do

  let!(:user) { FactoryBot.create(:user) }
  let!(:note) { FactoryBot.create_list(:random_note, 20)}

  before do
    post "/notes", 
    headers: { 'HTTP_AUTHORIZATION' => ActionController::HttpAuthentication::Basic.encode_credentials(user.email, user.password) },
    :params => {:note => {:title => "seventeen", :content => "SEVENTEEN ON FACE THE SUN & THE START OF A NEW ERA."}} 

  end
    it 'return the note' do
      expect(JSON.parse(response.body)['question']).to include('seventeen')
    end

end