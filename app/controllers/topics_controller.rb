class TopicsController < ApplicationController
  has_many :problems

  def index 
    @topic = Topic.all
  end

  def show 
    @topic = Topic.find(params[:id])
  end

  def create 
    @topic = Topic.create(topic_params)
  end

  def update 
    @topic = Topic.update(topic_params)
  end

  def delete 
    
  end


  private
  
  def topic_params 
    params.require(:topic).permit(:high_score, :name)
  end

end
