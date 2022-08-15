const router = require("express").Router();
const contactRoutes = require("./contacts");
const projectsRoutes = require('./projects')

router.use("/contacts", contactRoutes);
router.use('/projects', projectsRoutes)

module.exports = router;
