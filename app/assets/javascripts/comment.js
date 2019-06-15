$(function() {
  function buildHTML(message){
    var img = message.image? `<img src=${message.image}>` : "";

    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <p class="upper-message__user-name">
                    ${message.user_name}
                    </p>
                    <p class="upper-message__date">
                    ${message.date}
                    </p>
                    </div>
                  <div class="lower-message">
                    <div class="lower-message__content">
                    ${message.content}
                  </div>
                  <div class="lower-message__content">
                    ${img}
                  </div>
                </div>` 
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
      $('#new_message')[0].reset();
     })
    .fail(function(data){
      alert('error');
    })
    return false;
  })

  var reloadMessages = function(){
    var last_message_id = $('.message:last').last().data('id');
    var urlPathSplit = location.pathname.split('/');
    var reload =('/'+urlPathSplit[1]+'/'+urlPathSplit[2]+'/'+'api/messages');
    $.ajax({
      url: reload,
      type: 'GET',
      data: {id: last_message_id},
      dataType: 'json'
    })
    .done(function(messages) {
      var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildHTML(message);
      })
      $('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      console.log('error');
    })
  };
  setInterval(reloadMessages, 5000);
});