class SessionsController < ApplicationController

  #login page
  def new
    user = User.new
    render inertia: 'Users/Login', props: {
      user: user.as_json
    }
  end
  #https://github.com/inertiajs/inertia-rails  
  #https://guides.rubyonrails.org/routing.html
  #login actions
  def create
    user = User.find_by(email: params[:session][:email].downcase)

    #puts user, 'from session'
   
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Logged in successfully.', turbolinks: false
    else
      render inertia: 'Users/Login', props: {
        flash: {
          alert: "Invalid email or password."
        }
      }
    end
  end
  
  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'You have been logged out.', turbolinks: false
  end
end
