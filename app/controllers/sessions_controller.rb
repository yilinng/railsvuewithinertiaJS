class SessionsController < ApplicationController
  
  #login page
  def new
    user = User.new
    render inertia: 'Users/Login', props: {
      user: user.as_json
    }
  end

  #login actions
  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Logged in successfully.', turbolinks: false
    else
      #redirect_to request.referrer, alert: "Invalid email or password" , turbolinks: false
      render json: { error: "Invalid email or password" }
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'You have been logged out.', turbolinks: false
  end
end
