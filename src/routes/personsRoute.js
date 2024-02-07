const { Router } = require("express");
const PersonController = require("../controllers/personController");

const router = Router();

router.get("/persons", PersonController.getAll);

module.exports = router;
