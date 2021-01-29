json.problems do 
  json.array! @problems do |problem|
    json.id problem.id
    json.question problem.question
  end
end