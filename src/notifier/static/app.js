window.onload = function() {

  // get the references of the page elements.
  var form = document.getElementById('form-msg');
  var txtMsg = document.getElementById('msg');
  var listMsgs = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var btnClose = document.getElementById('close');
  var btnOpen = document.getElementById('open');
  var endpoint = "ws://"+ window.location.host + "/ws/"

  // Creating a new WebSocket connection to localhost opened page
  var socket = new WebSocket(endpoint);

   socket.onopen = function(event) {
  	socketStatus.innerHTML = "Connected to endpoint: " + endpoint;
  	socketStatus.className = "open";
    console.log("Connected to websocket: " + endpoint)
  };

  socket.onerror = function(error) {
  	console.log('WebSocket error: ' + error);
  };

  form.onsubmit = function(e) {
      e.preventDefault();

      // Recovering the message of the textarea.
      var msg = txtMsg.value;

      // print to console
      console.log("Message: " + msg)

      // Sending the msg via WebSocket.
      socket.send(msg);

      // Adding the msg in a list of sent messages.
      listMsgs.innerHTML += '<li class="sent"><span>Sent:</span>' + msg + '</li>';

      // Cleaning up the field after sending.
      txtMsg.value = '';

      return false;
  };

  btnClose.onclick = function(e){
    console.log("Closing connection.");
    // Close the connection, if open.
    if (socket.readyState === WebSocket.OPEN) {
       socket.close(1000, "Deliberate disconnection");
    }
  };

  socket.onmessage = function(event) {
      var msg = event.data;
      listMsgs.innerHTML += '<li class="received"><span>Received:</span>' + msg + '</li>';
  };

  socket.onclose = function(event) {
      console.log("Closing connection.");
      socketStatus.innerHTML = 'Disconnected from the WebSocket.';
      socketStatus.className = 'closed';
  };


};
