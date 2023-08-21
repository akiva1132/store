const jsonfile = require("jsonfile");
const fileData = "./user.json";

function read() {
  const data = jsonfile.readFileSync(fileData);
  return data;
}
function write(data) {
  jsonfile.writeFileSync(fileData, data, (err, resultData) => {
    if (err) {
      return err;
    }
  });
  return "user is registered in the list of users";
}
module.exports = { read, write };
