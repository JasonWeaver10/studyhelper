json.problem do
  json.topic_id @problem.topic_id
  json.question @problem.question
  json.answer @problem.answer
  json.wrong_answer_1 @problem.wrong_answer_1 
  json.wrong_answer_2 @problem.wrong_answer_2 
  json.wrong_answer_3 @problem.wrong_answer_3 
  json.hint @problem.hint
end