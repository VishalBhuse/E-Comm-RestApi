const express = require("express");
const mongoose = require("mongoose");
const laptopRoute = require("./route/laptop.route");
const app = express();
const port = process.env.PORT || 8000;
const mobileRoute = require("./route/mobile.route");
var cors = require('cors'); 
app.use(cors())

app.use(express.json());
require("dotenv").config();

app.use("/mobiles", mobileRoute);
app.use("/laptop", laptopRoute);

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, async () => {
  await mongoose.connect(process.env.DBURL);
  console.log(`Server running at http://localhost:${port}`);
});
