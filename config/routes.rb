Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#home'
  
  get '/login' => 'static_pages#login'
  get '/logout' => 'static_pages#logout'
  get '/addQuestion' => 'static_pages#addQuestion'
  get '/addTopic' => 'static_pages#addTopic'
  get '/allTopics' => 'static_pages#allTopics'
  get '/editQuestion/:id' => 'static_pages#editQuestion'

  namespace 'api' do 
    resources :users, only: [:create]
    resources :topics
    resources :questions
    resources :sessions, only: [:create, :destroy]
  end
  
end
