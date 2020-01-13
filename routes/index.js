var express = require("express");
var axios = require("axios");
var router = express.Router();

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 5000
});

/* GET home page. */
router.get("/get_forms", async (req, res) => {
  try {
    const response = await instance.get("forms/", {
      params: { creator__key: "0d6dd5cd-f133-4144-a5ff-992158c87316" }
    });
    res.send(res.json(response.data));
  } catch (error) {
    res.send(res.json(error));
  }
});

router.get("/get_answers", async (req, res) => {
  await instance
    .get("answers/", {
      params: { creator__key: "0d6dd5cd-f133-4144-a5ff-992158c87316" }
    })
    .then(response => res.send(res.json(response.data)))
    .catch(error => res.send(res.json(error)));

  res.send(res.json(response.data));
});

module.exports = router;
