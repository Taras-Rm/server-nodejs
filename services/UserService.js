const User = require("../models/User.js");

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async get(id) {
    const user = await User.findById(id);
    return user;
  }
}

module.exports = new UserService();
