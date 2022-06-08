const UserService = require("../services/UserService.js");

class UserController {
  async create(req, res) {
    try {
      const user = req.body;
      const createdUser = await UserService.create(user);
      res.status(200).json(createdUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    try {
      const {id} = req.params;
      const user = await UserService.get(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
