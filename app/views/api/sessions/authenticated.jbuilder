json.session do
  json.email @user.email
  json.id @user_id
  json.session_id @session
end