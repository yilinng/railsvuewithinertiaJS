class UsersController < ApplicationController
  #before_action :authorized, only: [:auto_login]

  #GET REGISTER PAGE /signup
  def new
    user = User.new
    render inertia: 'Users/Signup', props: {
      user: user.as_json
    }
  end

  # REGISTER action
  def create

    user = User.find_by(email: params[:email])

    return if user

    @user = User.create(user_params)
    
    if @user.valid? && @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'Signup in successfully.', turbolinks: false
    else
      render json: { error: "Invalid username or password" }
    end
  end



  private

  def user_params
    params.permit(:email, :password, :username)
  end
end
