const router = require("express").Router();
const doSeed = require("../../lib/databaseSeed");

// This is a seriously dodgy way to do it since any random nonvalidated user could reseed the database.
// For dinking around though?  Meh
// Matches with "/api/utils/doSeed"
router
  .route("/doSeed")
  .get((req,res)=>{
      console.log("I've routed to doSeed");
      doSeed().then((numCommands)=>{
          res.end("run database commends: " + numCommands)
      })
    });
  
module.exports = router;