// document.getElementById('submitAnimalBtn').addEventListener('click', function(e) {
//   e.preventDefault();
//   var data = {};
//
//   // Something is missing...
//
//   // Using sendInfo to send all the animal data to the server to save it in the database.
//   sendInfo('/animals/new', 'POST', data, function(err, result) {
//     if (err) console.log(err);
//     else {
//       alert(result.msg);
//       if (result.redirect) {
//         window.location = result.redirect;
//       }
//     }
//   });
// });
function animals(url, callback) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      callback(null, data);
    });

  var button = document.getElementById("submitAnimalBtn");
  button
    .addEventListener("click", event => {
      event.preventDefault();
      var animalName = document.getElementById("animalName").value;
      var img = document.getElementById("img").value;
      var habitat = document.getElementById("habitat").value;
      var origin = document.getElementById("origin").value;
      var facts = document.getElementById("facts").value;
      var myth = document.getElementById("myth").value;

      animals("submitAnimalBtn", {
        animalName,
        img,
        habitat,
        origin,
        facts,
        myth
      });
    })
    .catch(function(err) {
      callback(err);
    });
}
