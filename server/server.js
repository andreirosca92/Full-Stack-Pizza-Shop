"use strict";

const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
app.use(cors());
// middleware
app.use(express.urlencoded({ extended: false }));
// read db.json
const pizzas = require("./db.json");

const db = app.get("/", (req, res) => {
  //console.log(req.body.name);
  res.status(200).end();
});
app.get("/about", (req, res) => {
  //console.log(req.body.name);
  res.status(200).end();
});
app.get("/products-pizza", (req, res) => {
  //console.log(req.body.name);
  res.json(pizzas);
});
app.get("/products-pizza/:id", (req, res) => {
  const id = req.params.id;

  const pizza = pizzas.pizza.find((pizza) => pizza.id == id);
  res.json(pizza);
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORT", PORT);
});
