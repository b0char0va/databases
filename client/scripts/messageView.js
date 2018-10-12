var MessageView = {

  render: _.template(`
      


      <div class="chat">
        <div
          class="username"
          data-username="<%- name %>">
          <%- name %>
        </div>
        <div><%- text %></div>
      </div>


    `)

};