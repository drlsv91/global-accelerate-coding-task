"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodos = void 0;
const Todo_1 = require("../models/Todo");
const TODOS = [];
const createTodos = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ message: 'Sucessfully created', createdTodos: newTodo });
};
exports.createTodos = createTodos;
