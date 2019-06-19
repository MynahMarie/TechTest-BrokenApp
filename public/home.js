document.getElementById('submitBtn').addEventListener('click', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  console.log(name);
  // Use function sendInfo to POST information to server
  sendInfo('/user/' + name, 'POST', name, function(err, success) {
      // Some things are missing...
      window.location = success.redirect; // You will need this line somewhere ;)
    }
  );
});
