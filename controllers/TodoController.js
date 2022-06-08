const TodoService = require("../services/TodoService.js");
const UserService = require("../services/UserService.js");

class TodoController {
  async create(req, res) {
    try {
      const { content, done, user_id } = req.body;
      const user = await UserService.getOne(user_id);
      const todo = await TodoService.create(content, done, user);
      return res.status(200).json(todo);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const todoForUpd = req.body;
      const updatedTodo = await TodoService.update(todoForUpd);
      return res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedTodo = await TodoService.delete(id);
      return res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const { user_id } = req.params;
      const todos = await TodoService.getAll(user_id);
      return res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(e);
    }
  }
}

module.exports = new TodoController();
