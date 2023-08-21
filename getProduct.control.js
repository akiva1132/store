const express = require("express");
const productService = require("./getProduct.service")
const router = express.Router();



const getAll = (req, res) => {
  const all = productService.getAllproduct();
  res.json(all);
};

const getById = (req, res) => {
  try {
    const getById = productService.getById(req.params.id);
    res.json(getById);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
const crateProduct = (req, res) => {
  try {
    const crateProduct = productService.crateProduct(req.body);
    res.send(crateProduct);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
const updateProduct = (req, res) => {
  try {
    const updateProduct = productService.updateProduct(req.params.id, req.body);
    res.send(updateProduct);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
const deleteProduct = (req, res) => {
  try {
    const deleteProduct = productService.deleteProduct(req.params.id);
    res.send(deleteProduct);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
const quantityChange = (req, res) => {
  try {
    const quantityChange = productService.quantityChange(
      req.params.id,
      req.params.type
    );
    res.send(quantityChange);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
module.exports = {
  getAll,
  getById,
  crateProduct,
  updateProduct,
  deleteProduct,
  quantityChange,
};
