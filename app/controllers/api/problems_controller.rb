module Api
  class ProblemsController < ApplicationController


    def index 
      @problem = Problem.all
    end

    def show 
      @problem = Problem.find(params[:id])
    end

    def create 
      @problem = Problem.create(problem_params)
    end

    def update 
      @problem = Problem.update(problem_params)
    end

    def delete 
      
    end


    private
    
    def problem_params 
      params.require(:problem).permit(:answer, :wrong_answer_1, :wrong_answer_2, :wrong_answer_3, :question, :hint, :topic_id)
    end
  end
end
