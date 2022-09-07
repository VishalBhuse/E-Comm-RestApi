const express = require("express");
const Mobile = require("../schema/mobile.schema");

const mobileRoute = express.Router();

mobileRoute.get("/", async (req, res) => {
  let mobi = await Mobile.find();
  res.send(mobi);
});

mobileRoute.get("/:id", async (req, res) => {
  try {
    let mobi = await Mobile.findOne({_id : req.params.id});
    res.send(mobi);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

mobileRoute.post("/", async (req, res) => {
  try {
    let mobi = await Mobile.create(req.body);
    res.send(mobi);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

mobileRoute.patch("/:id", async (req, res) => {
  try {
    let pro = await Mobile.findByIdAndUpdate(req.params.id, { ...req.body });
    let newPro = await Mobile.findById(req.params.id);
    res.send(newPro);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

mobileRoute.delete("/:id", async (req, res) => {
  try {
    let mobi = await Mobile.findByIdAndDelete(req.params.id);
    res.send("Delete Successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = mobileRoute;
