const express = require('express');
const router = express.Router();
const { clientError, serverError } = require('./errors');
const animals = require('../models/animals');
// const singleAnimal = require('../models/single_animals');
const { capitalize } = require('../helpers/capitalize');
const { displayAnimals, fetchSingleAnimal, insertAnimal } = require('../database/queries/animal_queries');

router.get('/', (req, res) => { // DONT CHANGE THIS LINE!
  res.render('home');
});

router.get('/congrats', (req, res) => { // DONT CHANGE THIS LINE!
  res.render('congrats');
});

router.get('/user/:name', (req, res) => { // DONT CHANGE THIS LINE!
  // We need to send the name of the user to the view.
  //Make sure the name is capitalized when it shows on the page!
  const nameValue = req.params.name;
  const name = capitalize(nameValue[0] + nameValue.slice(1));
  console.log("this is my name:", name);
  res.render('welcome', { name });

  })



router.post('/user/:name', (req, res) => { // DONT CHANGE THIS LINE!
  // This endpoint goes to any name the user entered on the home page.
  // ex. : /user/mynah, /user/shireen, /user/lital, etc...
  res.send({redirect: '/user/'.concat(name)}); // DONT CHANGE THIS LINE!
});

router.get('/animals', (req, res) => {  // DONT CHANGE THIS LINE!

  //Now we are rendering data from a file...
  // The data in the file is just dummy data. We need to take the data from the database!
  res.render('animals', { animals });
});


router.get('/animals/create', (req, res) => { // DONT CHANGE THIS LINE!
  // Render create_animal and send appropriate data
  // const { animalName ,img, habitat, origin, facts, myth } = req.body;
  // insertAnimal(animalName ,img, habitat, origin, facts, myth, (err,result) => {
  //   if (err) console.log("There is an error!:", err);
  //   else { res.render('create_animal');
  //   }
  //
  //
  // })
});

router.post('/animals/new', (req, res) => { // DONT CHANGE THIS LINE!
  let data = req.body.data;
  let msg = "Thank you for registering a new animal!";

  // Here we need to first check if this animal is already in the database.
  // Then, we need to receive the input from the form and insert the animal in the database.
  // Finally, we redirect the user to /animals with a msg (success if animal was created, or
  // "Sorry, this animal was already created...", if the animal is already in the database).
  res.send({redirect: '/animals', msg });
})

router.get('/animals/:animal', (req, res) => { // DONT CHANGE THIS LINE!
  const animal_name = req.url.split('/')[2];
  const singleAnimal = {};
  fetchSingleAnimal(animal_name, (err, row) => {
    if (err) console.log(err);
    res.render('single_animal', { singleAnimal: row });
  })
});

// How to deal with pages not found? HINT: This app has a function for that somewhere...

module.exports = router;
