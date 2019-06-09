json.id @message.id
json.content @message.content
json.image @message.image_url
json.date @message.created_at.strftime("%Y/%M/%D %H:%M")
json.user_name @message.user.name