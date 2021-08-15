const express = require("express");
const ordersController = require("../controller/ordersController");

const routes = express.Router();

routes.post("/", ordersController.postOrders);
routes.get("/", ordersController.getOrders);

module.exports = routes;
