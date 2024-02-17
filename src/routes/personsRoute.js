const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");
const EnrollmentController = require("../controllers/EnrollmentController.js");

const personController = new PersonController();
const enrollmentController = new EnrollmentController();

const router = Router();

router.get("/persons", (req, res) => personController.getAll(req, res));
router.get("/persons/:id", (req, res) => personController.getById(req, res));
router.post("/persons", (req, res) => personController.newCreate(req, res));
router.put("/persons/:id", (req, res) => personController.update(req, res));
router.delete("/persons/:id", (req, res) => personController.delete(req, res));

router.post("/persons/:studentId/enrollments", (req, res) =>
  enrollmentController.newCreate(req, res)
);

module.exports = router;
