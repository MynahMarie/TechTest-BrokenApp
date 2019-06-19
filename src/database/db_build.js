// DONT CHANGE THIS FILE
const fs = require("fs");
require("dotenv").config();

const dbConnection = require("./db_connect.js");

let sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const runDbBuild = cb => {
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

runDbBuild((e, success) => {
  if (e) console.log(e);
  else console.log(success);
});

module.exports = runDbBuild;
