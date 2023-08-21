const express = require("express");
const usersService = require("../service/getusers.js");
const router = express.Router();

const permissionsManagement = (req, res, next) => {
  try {
    user = usersService.getById(req.params.idAdmin);
    if (user.isAdmin === "true") {
      next();
    }
  } catch {
    res.status(400).send("Error, not permissions");
  }
};

const getAll = (req, res) => {
  const all = usersService.getAllUsers();
  res.json(all);
};
const getById = (req, res) => {
  try {
    const getById = usersService.getById(req.params.id);
    res.json(getById);
  } catch {
    res.status(400).send("Error, not found il");
  }
};
const crateUser = (req, res) => {
  try {
    const crateUser = usersService.crateUser(req.body);
    res.send(crateUser);
  } catch {
    res.status(400).send("password or email not support");
  }
};
const updateUser = (req, res) => {
  try {
    const updateUser = usersService.updateUser(req.params.id, req.body);
    res.send(updateUser);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
const deleteUser = (req, res) => {
  try {
    const deleteUser = usersService.deleteUser(req.params.id);
    res.send(deleteUser);
  } catch {
    res.status(400).send("Error, not found id");
  }
};
module.exports = {
  getAll,
  getById,
  crateUser,
  updateUser,
  deleteUser,
  permissionsManagement,
};
