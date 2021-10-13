const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");



const users = require("./routes/users"); 
const age_restrictions = require("./routes/age_restrictions");
const misc_restrictions = require("./routes/misc_restrictions");
const voice_restrictions = require("./routes/voice_restrictions");
const length_restrictions = require("./routes/length_restrictions");
const gender_restrictions = require("./routes/gender_restrictions");
const genre_restrictions = require("./routes/genre_restrictions");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
  // actions = { necessary functions here }
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", users(db));
  app.use("/api", age_restrictions(db));
  app.use("/api", misc_restrictions(db));
  app.use("/api", length_restrictions(db));
  app.use("/api", voice_restrictions(db));
  app.use("/api", gender_restrictions(db));
  app.use("/api", genre_restrictions(db));

  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`)),
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};