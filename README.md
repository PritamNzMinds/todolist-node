# Todo List App

A simple and secure Todo List application that allows users to register, log in, and manage their personal tasks with full CRUD operations.

---

## Features

- User registration and login with valid credentials
- Authentication using JWT
- Authenticated users can:
  - Add tasks
  - View all tasks
  - Update tasks
  - Delete tasks

## File Info

- config/
  - dbConnection.js : Database connection setup
- controller/
  - auth.controller.js : Handles user registration and login
  - task.controller.js : Handles task CRUD operations
- helper/
  - response.js : Utility functions for success and error responses
- middleware/
  - auth.js : Middleware for password hashing and token verification
- model/
  - user.model.js : User schema and validation
  - task.model.js : Task schema and validation
- router/
  - auth.router.js : Routes for authentication (register, login)
  - task.router.js : Routes for task operations (add, get, update, delete)
- index.js : Application entry point
- .env : Environment variables (not included in repo)

## start server

- npm start

## Api endpoint

- Auth Routes

  - POST method : /auth/register for register a new user
  - POST method : /auth/login for login and recieve token

- Task Routes
  - POST /task/add for Add a new task
  - GET /task/get for Get all tasks
  - PUT /task/markComplete/:id for mark complete task
  - PUT /task/update/:id for Update a task
  - DELETE /task/delete/:id for Delete a task
