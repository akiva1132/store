const usersArr = require("../UsersDAL.js");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const saltRounds = 10;

async function checkPassword(password, passwordFromdata) {
  let promise = new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordFromdata).then((check) => {
      if (check === true) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
  return promise;
}

function emailIntegrityCheck(email) {
  const check = email.split("@");
  if (check.length === 2 && check[1].includes(".")) {
    return true;
  } else {
    console.log("ema");
  }
}

function passwordIntegrityCheck(password) {
  let bigChar = false;
  let smallChar = false;
  let count = 0;
  for (i of password) {
    count++;
    if (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 97) {
      bigChar = true;
    } else if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) {
      smallChar = true;
    }
  }
  if (bigChar === true && smallChar === true && count >= 8) {
    return true;
  } else {
    console.log("pass");
  }
}

const getAllUsers = () => {
  const users = usersArr.read();
  return users;
};
const getById = (id) => {
  let result = "";
  const users = usersArr.read();
  users.forEach((user) => {
    if (user.id === id) {
      result = user;
    }
  });
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};
const updateUser = (id, body) => {
  const users = usersArr.read();
  if (
    !passwordIntegrityCheck(body.password) ||
    !emailIntegrityCheck(body.email)
  ) {
    throw Error;
  }
  let result = "";
  users.forEach((user) => {
    if (user.id === id) {
      user = body;
      // Preventing the possibility of changing the id by the user
      user.id = id;
      // user.password = bcrypt.hash(body.password, saltRounds)
      bcrypt.hash(body.password, saltRounds).then(async (hash) => {
        user.password = hash;
        let tempUsers = [];
        users.forEach((user) => {
          if (user.id !== id) {
            tempUsers.push(user);
          }
        });
        tempUsers.push(user);
        console.log(tempUsers);
        usersArr.write(tempUsers);
      });

      result = "update sucsess";
    }
  });
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};
const crateUser = (body) => {
  if (
    passwordIntegrityCheck(body.password) &&
    emailIntegrityCheck(body.email)
  ) {
    const users = usersArr.read();
    const user = { id: uuidv4() };
    user.email = body.email;
    user.isAdmin = "false";
    const password = body.password;
    console.log(body.password, body.email);
    bcrypt.hash(password, saltRounds).then(async (hash) => {
      user.password = hash;
      users.push(user);
      usersArr.write(users);
    });
    return "sucsess";
  } else {
    throw Error;
  }
};
const deleteUser = (id) => {
  const users = usersArr.read();
  let result = "";
  let tempUsers = [];
  users.forEach((user) => {
    if (user.id !== id) {
      tempUsers.push(user);
    } else {
      result = "delete sucsess";
    }
  });
  usersArr.write(tempUsers);
  if (result == false) {
    throw Error;
  } else {
    return result;
  }
};
module.exports = {
  getAllUsers,
  getById,
  crateUser,
  updateUser,
  deleteUser,
};
