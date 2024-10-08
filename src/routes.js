const UserController = require("./controllers/UserController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UserController.listUsers, //não executa func só passa referencia
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UserController.getUserByID,
  },
  {
    endpoint: "/users",
    method: "POST",
    handler: UserController.createUser,
  },
  {
    endpoint: "/users/:id",
    method: "PUT",
    handler: UserController.updateUser,
  },
  {
    endpoint: "/users/:id",
    method: "DELETE",
    handler: UserController.deleteUser,
  },
];
