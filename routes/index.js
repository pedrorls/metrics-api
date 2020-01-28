var express = require("express");
var router = express.Router();

const FormsController = require("../controllers/FormsController");

router.get("/get_forms", FormsController.getForms);

router.get("/get_answers", FormsController.getFormsAnswers);

module.exports = router;
