"use strict";

const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
app.use(cors());
// middleware

app.use(express.urlencoded({ extended: false }));
const { MongoClient } = require("mongodb");

// Create Instance of MongoClient for mongodb
const url = "mongodb://localhost:27017";
const databaseName = "pizza-shop";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  const db = result.db(databaseName);
  const collection = db.collection("pizzas");
  let data = await collection.find({}).toArray();

  return data;
}

app.get("/", (req, res) => {
  //console.log(req.body.name);
  res.status(200).end();
});
app.get("/about", (req, res) => {
  //console.log(req.body.name);
  res.status(200).end();
});
app.get("/products-pizza", async (req, res) => {
  // return collection pizzas
  const pizzas = await getData();
  console.log({ pizzas });
  res.json(pizzas);
});
app.get("/products-pizza/:id", async (req, res) => {
  const id = req.params.id;
  const pizzas = await getData();
  const pizza = pizzas?.find((pizza) => pizza.id == id);
  res.json(pizza);
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORT", PORT);
});
