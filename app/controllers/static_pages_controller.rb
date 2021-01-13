class StaticPagesController < ApplicationController
  def home
    render 'home' 
  end

  def login 
    render 'login'
  end

  def logout 
    render 'logout'
  end

  def addQuestion 
    render 'addQuestion'
  end

  def addTopic 
    render 'addTopic'
  end

  def allTopics 
    render 'allTopics'
  end
end
