class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Expose current_user method to the views
  helper_method :current_user
  helper_method :logged_in?

  private
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token! unless logged_in_as_guest?
  end

  def login_guest
    session[:session_token] = "Guest"
  end

  def logout_user!
    current_user.reset_session_token! unless logged_in_as_guest?
    session[:session_token] = nil
  end

  def logged_in_as_guest?
    current_user && current_user.username == "Guest"
  end

end
