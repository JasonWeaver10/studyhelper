Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'static_pages#home'
  
  get '/login' => 'static_pages#login'
  get '/logout' => 'static_pages#logout'
  get '/addQuestion' => 'static_pages#addQuestion'
  get '/addTopic' => 'static_pages#addTopic'
  get '/oneTopic' => 'static_pages#oneTopic'
  get '/allTopics' => 'static_pages#allTopics'
  get '/editQuestion/:id' => 'static_pages#editQuestion'
  get '/questions' => 'static_pages#questions'
  get '/quizType' => 'static_pages#quizSelector'

  namespace 'api' do 
    resources :users, only: [:create]
    resources :topics
    resources :problems
    resources :sessions, only: [:create, :destroy]

    get '/topicProblems/:id' => 'problems#topicProblems'
  end

  
end
