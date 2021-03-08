require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const doSeed = require("./lib/databaseSeed");
const PORT = process.env.PORT || 3001;

let doOnlySeeding = false;

const args = process.argv.slice(2);

if (args.length === 1 && args[0] === "seed") {
  console.log("seeding the database");
  doOnlySeeding = true;
}

if (doOnlySeeding) {
  doSeed().catch((e) => console.error(e));
} else {
  // Define middleware here
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);

  // todo connect sequelize

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}
