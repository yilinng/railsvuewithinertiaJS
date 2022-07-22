Rails.application.routes.draw do
  if Rails.env.test?
    namespace :test do
      resource :session, only: %i[create]
    end
  end
  resources :notes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :users, only: [:create]
  root 'pages#home'
  get "signup", to: "users#new"
  post "signup", to: "users#create"
  get "login", to: "sessions#new"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
end
