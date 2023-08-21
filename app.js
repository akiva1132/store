const express = require("express");
const morgan = require("morgan");
const app = express();
const routGetProduct = require("./routes/getProduct.js");
const routOfUser = require("./routes/getUsers.js");
const userControl = require("./controlers/getUsers.js")


const cors = require('cors') 
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/product", routGetProduct);
// app.use("/users/:id", )
app.use("/users", routOfUser);


app.listen(3001, () => {
  console.log("run...");
});
