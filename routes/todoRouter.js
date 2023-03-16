const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Todo =require('../Models/todoModel')


// GET /api/todo
router.get('/', asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}));

// GET /api/todo/:id
router.get('/:id',asyncHandler( async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    res.json(todo);
}));

// POST /api/todo
router.post('/', asyncHandler(async (req, res) => {
    const { title, description, dueDate, completed, priority } = req.body;
    if (!title) {
        return res.status(400).send('Title is required');
    }
    const todo = new Todo({
        title,
        description,
        dueDate,
        completed,
        priority,
    });
    await todo.save();
    console.log(todo);
    res.status(201).json(todo);
}));

// PUT /api/todo/:id
router.put('/:id', asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    const { title, description, dueDate, completed, priority } = req.body;
    if (title) {
        todo.title = title;
    }
    if (description) {
        todo.description = description;
    }
    if (dueDate) {
        todo.dueDate = dueDate;
    }
    if (completed !== undefined) {
        todo.completed = completed;
    }
    if (priority !== undefined) {
        todo.priority = priority;
    }
    await todo.save();
    res.json(todo);
}));

// DELETE /api/todo/:id
router.delete('/:id', asyncHandler(async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    res.sendStatus(200);
}));

module.exports = router