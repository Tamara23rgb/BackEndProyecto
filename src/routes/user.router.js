const { getAll, create, getOne, remove } = require('../controllers/users.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/users')
    .get(getAll)
    .post(create)

userRouter.route("/users/:id")
    .get(getOne)
    .delete(remove)

module.exports = userRouter;