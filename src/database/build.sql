-- DONT CHANGE THIS FILE
BEGIN;

DROP TABLE IF EXISTS animals CASCADE;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  animal_name VARCHAR(30) NOT NULL,
  img_link VARCHAR(200),
  habitat VARCHAR(200),
  origin VARCHAR(200),
  facts TEXT,
  myths TEXT
);

INSERT INTO animals (animal_name, img_link, habitat, origin, facts, myths) VALUES
  ('elephant', '/assets/animals/elephant.jpeg', 'Lives in the Savana', 'Africa and Asia', 'Facing extinction because of their ivory tusks.', 'An elephant never forgets.'),
  ('tiger', '/assets/animals/tiger.jpeg', 'Variety of habitats, from tropical forest to grass lands.', 'Africa', 'Biggest specie of the cat family.', 'The tiger who lost its stripes'),
  ('koala', '/assets/animals/koala.jpeg', 'Eucalyptus forests and woodlands', 'Australia', 'They sleep up to 18h a day!', 'The koala who had a stumpy tail'),
  ('kangoroo', '/assets/animals/kangoroo.jpeg', 'Variety of habitats, from savana to grassy plains', 'Australia', 'The mom has as a pocket to carry the babies', 'Roger The Kangoroo'),
  ('lion', '/assets/animals/lion.jpeg', 'Open lands', 'Africa', 'They are the most social of all big cats.', 'The lion King'),
  ('giraffe', '/assets/animals/giraffe.jpeg', 'Savana and open ranges', 'Sahara and regions of Africa', 'Tallest mamel on Earth.', 'Giraffes Can't Dance'),
  ('antilope', '/assets/animals/antilope.jpeg', 'African savanas', 'Africa', 'Runs very fast.', 'The Lion and the Antilope');

COMMIT;
