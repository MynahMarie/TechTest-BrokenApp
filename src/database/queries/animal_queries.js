const dbConnect = require('../db_connect');

const displayAnimals = (cb) => {
  dbConnect.query(`SELECT name FROM animals;`, (e, res) => {
    // humm...
    return cb(res.rows);
  });
}

const fetchSingleAnimal = (animal_name, cb) => {
  // humm...
  dbConnect.query(`SELECT * FROM animals WHERE animal_name = {$1}`, [animal_name], (e, res) => {

    return cb(e, res);
  })
}

const insertAnimal = (data, cb) => {
    dbConnect.query(`INSERT INTO animals(animal_name, img_link, habitat, origin, facts, myths) VALUES($1, $2, $3, $4, $5, $6)`,
  [data], (e, success) => {
    // hum...
    return success;
  })
}

module.exports = {
  displayAnimals,
  fetchSingleAnimal,
  insertAnimal
}
