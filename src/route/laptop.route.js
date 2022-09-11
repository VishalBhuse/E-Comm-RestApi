const express = require("express");
const Laptop = require("../schema/laptop.schema");

const laptopRoute = express.Router();

laptopRoute.get("/", async (req, res) => {
  let { page, size } = req.query;
  if (!page) {page = 1;}
  if (!size) {size = 25;}
  const limit = parseInt(size);
  const skip = (page - 1) * size;

  let laptop = await Laptop.find().skip(skip).limit(limit);
  res.send({ page, size, laptop });
});

laptopRoute.get("/:id", async (req, res) => {
  let user = await Laptop.findById(req.params.id);
  res.send(user);
});

laptopRoute.post("/", async (req, res) => {
  try {
    let lapy = await Laptop.create(req.body);
    res.send(lapy);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

laptopRoute.patch("/:id", async (req, res) => {
  try {
    let pro = await Laptop.findByIdAndUpdate(req.params.id, { ...req.body });
    let newPro = await Laptop.findById(req.params.id);
    res.send(newPro);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

laptopRoute.delete("/:id", async (req, res) => {
  try {
    let lapy = await Laptop.findByIdAndDelete(req.params.id);
    res.send("Delete Successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = laptopRoute;
