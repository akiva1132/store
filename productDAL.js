const jsonfile = require("jsonfile");
const fileData = "./product.json";

function read() {
  const data = jsonfile.readFileSync(fileData);
  return data;
}
// let data1 = read();
// data1.forEach((element) => {
//   element.amount = Math.floor(Math.random() * 300);
// });
// write(data1)
// console.log(data1);

function write(data) {
  jsonfile.writeFileSync(fileData, data, (err, resultData) => {
    if (err) {
      return err;
    }
  });
  return "The product is registered in the store";
}
module.exports = { read, write };
