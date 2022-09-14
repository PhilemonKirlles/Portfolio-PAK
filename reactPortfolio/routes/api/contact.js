const router = require("express").Router();
const contectController = require("../../controller/contactController");

router.route("/")
  .get(contectController.findAll)
  .post(contectController.create);

router
  .route("/:id")
  .get(contectController.findById)
  .put(contectController.update)
  .delete(contectController.remove);

router
  .route("/name/:location")
  .get(contectController.findAllByName)
  .put(contectController.update)

module.exports = router;


module.exports = router