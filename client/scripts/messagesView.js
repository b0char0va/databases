var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      // .filter(message => Rooms.isSelected(message.room_id))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    // console.log('FROM RENDER MESSAGE', message);
    var $message = MessageView.render(message);
    // console.log('jquery', $message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
  }

};