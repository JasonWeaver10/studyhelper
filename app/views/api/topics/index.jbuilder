json.topics do
  json.array! @topics do |topic|
    json.user_id topic.user_id
    json.name topic.name
    json.high_score topic.high_score
  end
end