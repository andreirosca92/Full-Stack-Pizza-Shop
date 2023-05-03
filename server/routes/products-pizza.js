const express = require("express");
const getData = require("../db.js");
const router = express.Router();

router.get("/products-pizza", async (req, res) => {
  // return collection pizzas
  const pizzas = await getData();
  console.log({ pizzas });
  res.json(pizzas);
});
router.get("/products-pizza/:id", async (req, res) => {
  const id = req.params.id;
  const pizzas = await getData();
  const pizza = pizzas?.find((pizza) => pizza.id == id);
  res.json(pizza);
});

module.exports = router;
