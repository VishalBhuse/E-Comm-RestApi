const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema(
  {
    href: { type: String },
    src: { type: String },
    title: { type: String },
    star: { type: String },
    ratings: { type: String },
    reviews: { type: String },
    processor: { type: String },
    ram: { type: String },
    os: { type: String },
    storege: { type: String },
    displaySize: { type: String },
    warranty: { type: String },
    offerPrice: { type: Number },
    price: { type: Number },
    discount: { type: String },
    delivery: { type: String },
    qty: { type: Number },
  },
  {
    versionKey: false,
  }
);

const Laptop = mongoose.model("laptop", laptopSchema);

module.exports = Laptop;
