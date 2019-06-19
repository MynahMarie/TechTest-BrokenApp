document.getElementById('submitAnimalBtn').addEventListener('click', function(e) {
  e.preventDefault();
  var data = {};

  // Something is missing...
  var animalName = document.getElementsByName('animal_name').value;
  var imgLink = document.getElementsByName('img_link').value;
  var habitat = document.getElementsByName('habitat').value;
  var origin = document.getElementsByName('origin').value;
  var facts = document.getElementsByName('facts').value;
  var myths = document.getElementsByName('myths').value;
  console.log(animalName, imgLink, habitat, origin, facts, myths);

  // Using sendInfo to send all the animal data to the server to save it in the database.
  sendInfo('/animals/new', 'POST', data, function(err, result) {
    if (err) console.log(err);
    else {
      alert(result.msg);
      if (result.redirect) {
        window.location = result.redirect;
      } else {
        return
       {
        animalName,
        imgLink,
        habitat,
        habitat,
        origin,
        facts,
        myths
      }
      }
    }
  });
});
