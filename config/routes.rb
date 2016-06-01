Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:create, :destroy, :index, :show, :edit]
    resources :flashcards, only: [:create, :destroy, :index, :show, :edit]
  end

  root "static_pages#root"
end
