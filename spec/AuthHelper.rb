module AuthHelper
  def http_login
    email = 'test@test.com'
    password = 'test'
    request.headers['AUTHORIZATION'] = ActionController::HttpAuthentication::Basic.encode_credentials(email, password)
  end
end