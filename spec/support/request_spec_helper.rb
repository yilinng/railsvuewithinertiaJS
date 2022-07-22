module RequestSpecHelper

  def auth_headers(user)
    token = Knock::AuthToken.new(payload: {sub: user.id}).token
    {
      'Authorization': "Bearer #{token}"
    }
  end

  def login_as(user)
    post '/login', params: 
    { session: 
      { email: user[:email], 
        password: user[:password] 
    } }
  end
end