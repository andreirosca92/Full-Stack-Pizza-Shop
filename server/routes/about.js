const express = require("express");

const router = express.Router();

router.get("/about", (req, res) => {
  //console.log(req.body.name);
  res.send("About page\n");
});

module.exports = router;
