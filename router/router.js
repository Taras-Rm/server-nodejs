const Router = require("express");
const TodoController = require("../controllers/TodoController.js")
const UserController = require("../controllers/UserController.js")

const router = new Router()

router.post("/user", UserController.create)
router.get("/user/:id", UserController.get)

router.post("/todo", TodoController.create)
router.put("/todo", TodoController.update)
router.delete("/todo/:id", TodoController.delete)
router.get("/todo/:user_id", TodoController.getAll)

module.exports = router