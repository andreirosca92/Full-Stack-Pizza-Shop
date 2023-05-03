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

module.exports = getData;
