class ApplicationController < ActionController::Base
  include Inertiable
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  
  def logged_in?
    !!current_user
  end
  
  def require_user
    if !logged_in?
      redirect_to login_path, notice: 'You must be logged in to perform that action.', turbolinks: false
    end
  end
end
