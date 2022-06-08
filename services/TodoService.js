const Todo = require("../models/Todo.js");

class TodoService {
  async create(content, done, user) {
    const createdTodo = await Todo.create({
      content: content,
      done: done,
      user: user._id,
    });
    return createdTodo;
  }

  async update(todoForUpd) {
    const updatedTodo = await Todo.findByIdAndUpdate(
      todoForUpd._id,
      todoForUpd,
      { new: true }
    );
    return updatedTodo;
  }

  async delete(id) {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return deletedTodo;
  }

  async getAll(user_id) {
    const todos = await Todo.find({ user: user_id });
    return todos;
  }
}

module.exports = new TodoService();
