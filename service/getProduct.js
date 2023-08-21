const prouductsArr = require("../productDAL");

const getAllproduct = () => {
  const product = prouductsArr.read();
  return product;
};

const getById = (id) => {
  console.log("dsvdv")
  const products = prouductsArr.read();
  let result = "";
  products.forEach((product) => {
    if (product.id === Number(id)) {
      result = product;
    }
  });
  if (result == false) {
    throw Error;
  }
  else{
    return result
  }
};

const crateProduct = (data) => {
  const products = prouductsArr.read();
  let newId = 0;
  products.forEach((product) => {
    if (product.id > newId) {
      newId = product.id;
    }
  });
  data.id = newId + 1;
  products.push(data);
  const write = prouductsArr.write(products);
  console.log(products);
  return write;
};
const deleteProduct = (id) => {
  const products = prouductsArr.read();
  let result = "";
  let newpProducts = [];
  products.forEach((product) => {
    if (product.id !== Number(id)) {
      newpProducts.push(product);
    } else {
      result = "delete sucsess";
    }
  });
  prouductsArr.write(newpProducts);
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};

const updateProduct = (id, data) => {
  const products = prouductsArr.read();
  let result = "";
  products.forEach((product) => {
    if (product.id === Number(id)) {
      // Preventing the possibility of changing the id by the user
      data.id = Number(id);
      let newpProducts = [];
      products.forEach((product) => {
        if (product.id !== Number(id)) {
          newpProducts.push(product);
        }
      });
      newpProducts.push(data);
      prouductsArr.write(newpProducts);
      result = "update sucsess";
    }
  });
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};

const quantityChange = (id, type) => {
  let result = "";
  const products = prouductsArr.read();
  products.forEach((product) => {
    if (product.id === Number(id)) {
      type == 1 ? product.rating.count++ : product.rating.count--;
      result = "update sucsess";
    }
  });
  prouductsArr.write(products);
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};

module.exports = {
  getAllproduct,
  getById,
  crateProduct,
  updateProduct,
  deleteProduct,
  quantityChange,
};
