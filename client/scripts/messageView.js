var MessageView = {

  render: _.template(`
      


      <div class="chat">
        <div
          class="username"
          data-username="<%- user_id %>">
          <%- user_id %>
        </div>
        <div><%- text %></div>
      </div>


    `)

};