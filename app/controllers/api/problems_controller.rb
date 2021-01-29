module Api
  class ProblemsController < ApplicationController

    def index 
      @problems = Problem.all
      if !@problems
        render json: { success: false }, status: :bad_request
      else
        render status: :ok
      end
    end

    def show 
      @problem = Problem.find_by(id: params[:id])
      if !@problem 
        render json: { success: false }, status: :bad_request
      else
        render status: :ok
      end
    end

    def topicProblems
      @problems = Problem.where(topic_id: params[:topic_id])

      if !@problems 
        render json: { success: false }, status: :bad_request
      else
        render status: :ok
      end
    end

    def create 
      @problem = Problem.create(problem_params)
      if @problem.save
        render status: :ok
      else 
        render json: { success: false }, status: :bad_request
      end
    end

    def update 
      @problem = Problem.find_by(id: params[:id])
      if @problem.update(problem_params)
        render status: :ok
      else 
        render json: { success: false }, status: :bad_request
      end
    end

    def destroy
      @problem = Problem.find_by(id: params[:id])
      if @problem.destroy
        render status: :ok
      else 
        render json: { success: false }, status: :bad_request
      end
    end


    private
    
    def problem_params 
      params.require(:problem).permit(:answer, :wrong_answer_1, :wrong_answer_2, :wrong_answer_3, :question, :hint, :topic_id)
    end
  end
end
