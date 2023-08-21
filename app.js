const express = require("express");
const morgan = require("morgan");
const app = express();
const routGetProduct = require("./getProduct.rout");
const routOfUser = require("./getUsers.rout");


const cors = require('cors') 
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/", routGetProduct);
// app.use("/users/:id", )
app.use("/users", routOfUser);


app.listen(3001, () => {
  console.log("run...");
});
