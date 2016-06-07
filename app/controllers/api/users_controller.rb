class Api::UsersController < ApplicationController
  before_action :require_no_user!
  #TODO sanitize Query inputs ??? IMPORTANT
  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: nil, status: 404
    end
  end

  def destroy
    # TODO maybe fill this in at a later date
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
