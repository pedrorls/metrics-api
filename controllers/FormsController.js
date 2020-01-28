var axios = require("axios");

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 5000
});

const KEY = "3dd9ea12-9239-424e-84ce-a3dd3f3ccd7d";

const makeMetrics = data => {
  console.log(data);
  return data;
};

module.exports = {
  async getForms(req, res) {
    try {
      const response = await instance.get("forms/", {
        params: { code: KEY, ...req.query }
      });
      return res.json(response.data);
    } catch (error) {
      return res.json(error);
    }
  },

  async getFormsAnswers(req, res) {
    try {
      const response = await instance.get("answers/", {
        params: { code: KEY, ...req.query }
      });

      const metrics = makeMetrics(response.data);
      return res.json(metrics);
    } catch (error) {
      return res.json(error);
    }
  }
};
