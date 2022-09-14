const router = require("express").Router();
const contactRoutes = require("./contect");
const projectsRoutes = require('./projects')

router.use("/contect", contactRoutes);
router.use('/projects', projectsRoutes)

module.exports = router;
