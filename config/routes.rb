Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#home'
  get '/login' => 'static_pages#login'
  get '/logout' => 'static_pages#logout'
  
  namespace 'api' do 
    resources :users, only: [:create]
    resources :topics
    resources :questions
  end
  
end
