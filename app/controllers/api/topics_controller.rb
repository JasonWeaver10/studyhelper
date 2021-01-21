module Api
  class TopicsController < ApplicationController
    def index 
      @topics = Topic.all
      return render json: { error: 'not_found' }, status: :not_found if !@topics
      render 'api/topics/index', status: :ok
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
      params.require(:topic).permit(:high_score, :name, :user_id)
    end
  end
end
