import User from "./user.js";

let usersList = [];
let nextID = 1;

//class UserDB
export default class UserDB {
  //create and add a new user to the DB
  //returns the new user
  static add(name, email, password) {
    email = email.toLowerCase();
    let existingUserId = usersList.findIndex((u) => u.email === email);

    if (existingUserId >= 0) {
      throw new Error("Email already registered");
    } else {
      let newUser = new User(nextID++, name, email, password);
      usersList.push(newUser);
      return newUser;
    }
  }

  //removes an user from DB
  //returns the removed user
  static remove(id) {
    let existingUserId = usersList.findIndex((u) => u.id === id);

    if (existingUserId >= 0) {
      let oldUser = usersList[existingUserId];
      usersList.splice(existingUserId, 1);
      return oldUser;
    } else {
      throw new Error("User not found");
    }
  }

  //finds an user in DB by ID
  static find(id) {
    let existingUserId = usersList.findIndex((u) => u.id === id);

    if (existingUserId < 0) {
      throw new Error("User with id '" + id + "' not found");
    } else {
      return usersList[existingUserId];
    }
  }

  //finds an user in DB by email
  static findByEmail(email) {
    email = email.toLowerCase();
    let existingUser = usersList.find((u) => u.email === email);

    if (existingUser) {
      return existingUser;
    } else {
      throw new Error("User with email '" + email + "' not found");
    }
  }

  //Updates user name and password.
  //Undefined parameters are not updated.
  static update(id, name, password) {
    let user = usersList.find((u) => u.id === id);

    if (user) {
      if (name != undefined) user.name = name;

      if (password != undefined) user.password = password;

      return user;
    } else {
      throw new Error("User not found");
    }
  }

  static all() {
    return usersList;
  }
}

//fill DB with some data
UserDB.add("John Doe", "admin@dominio.com", "password");
