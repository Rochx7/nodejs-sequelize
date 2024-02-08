const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");

const personController = new PersonController();

const router = Router();

router.get("/persons", (req, res) => personController.getAll(req, res));
router.put("/persons/:id", (req, res) => personController.update(req, res));

module.exports = router;
