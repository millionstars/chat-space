json.id @message.id
json.message @message.content
json.message @message.image.url
json.created_at @message.reated_at.strftime("%F %H%M")
json.user_name @message.user.name