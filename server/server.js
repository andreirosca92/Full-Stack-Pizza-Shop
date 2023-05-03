"use strict";

const express = require("express");

const productsRoutes = require("./routes/products-pizza.js");
const homeRoutes = require("./routes/home.js");
const aboutRoutes = require("./routes/about.js");
const cors = require("cors");

const { router1, router2, router3 } = require("./routes/auth.js");
const PORT = 4000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", router1);
app.use("/", router2);
app.use("/", router3);
app.use("/", productsRoutes);

// middleware

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORT", PORT);
});
