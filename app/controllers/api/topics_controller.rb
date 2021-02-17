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
      @topic = Topic.find(params[:id])
      if @topic.update(topic_params)
        render status: :ok
      else 
        render json: { success: false }, status: :bad_request
      end
    end

    def delete 
      
    end

    def userTopics 
      @topics = Topic.where(user_id: params[:id])
      if !@topics
        render json: { success: false }, status: :bad_request
      else
        render status: :ok
      end

    end


    private
    
    def topic_params 
      params.require(:topic).permit(:high_score, :name, :user_id)
    end
  end
end
