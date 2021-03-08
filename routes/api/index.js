// parent router that just pulls in all the subroutes
// organized by feature
const path = require("path");

const router = require("express").Router();
const usersRoutes = require("./usersapi");
const utilsRoutes = require("./utils");

// Api routes
router.use("/users", usersRoutes);
router.use("/utils", utilsRoutes);

// If no API routes are hit, fallback to the static react build
router.use(function (req, res) {
  res.status(404).end("there's no api for " + req.url + ". Yer bad");
  /*
    examples had this for a fallback.  It seems like suspicious slop,
    at least for during development, since we would want a bad api request 
    to fail obnoxously for the sake of debugging.  Then again, a nonsense
    api would make some sense in production.  Consider making this a 
    conditional based on if we're running development or production
    */

  //res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
