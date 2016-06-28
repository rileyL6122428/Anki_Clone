class Api::SessionsController < ApplicationController
  # TODO check that command syntax lines up
  #TODO sanitize Query inputs ??? IMPORTANT
  def create

    if request.env["omniauth.auth"]
      handle_facebook_login
    else
      @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    end
		if @user
			login_user!(@user)
			# render "api/users/show.json.jbuilder", status: 200
      redirect_to "/#/dashboard"
      # render "static_pages/root.html.erb"
		else
			@errors = ['invalid credentials']
			render "api/shared/error", status: 401
		end
	end

	def destroy
		@user = current_user
		if @user
			logout_user!
			render "api/users/show"
		else
			@errors = ['no one logged in']
			render "api/shared/error", status: 404
		end
	end

	def show
    # byebug
		if current_user
			@user = current_user
			render "api/users/show"
		else
			@errors = "session not found"
			# render "api/shared/error" #, status: 404
			render "api/shared/error", status: 404
		end
	end

  private
  def handle_facebook_login
    @user = User.find_by_facebook_uid(request.env["omniauth.auth"]["uid"])

    unless @user
      @user = User.new(
        username: request.env["omniauth.auth"]["info"]["name"],
        email: request.env["omniauth.auth"]["info"]["email"],
        password: SecureRandom.urlsafe_base64(16),
        facebook_uid: request.env["omniauth.auth"]["uid"]
      )
      @user.save
    end
  end
end
