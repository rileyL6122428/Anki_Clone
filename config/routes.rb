Rails.application.routes.draw do
  get '/users/auth/facebook/callback', to: 'api/sessions#create'
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:create, :destroy, :index, :update]
    resources :reviews, only: [:create, :index]
    resources :public_decks, only: [:index, :show]

    resources :decks, only: [:show] do
      resources :flashcards, only: [:index]
    end

    resources :flashcards, only: [:show, :update, :create, :destroy]
  end

  root "static_pages#root"
end
