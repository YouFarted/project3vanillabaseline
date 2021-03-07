const router = require("express").Router();
const subapiController = require("../../controllers/subapiController");

// Matches with "/api/posts"
router
  .route("/")
  .get(subapiController.findAll)
  .post(subapiController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(subapiController.findById)
  .put(subapiController.update)
  .delete(subapiController.remove);

module.exports = router;