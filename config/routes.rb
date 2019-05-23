Rails.application.routes.draw do
  devise_for :users
  get 'messages' => 'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :update, :edit]
end
