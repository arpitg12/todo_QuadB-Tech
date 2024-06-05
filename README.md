# React To-Do Application

## Overview
This is a simple yet stylish To-Do application built with React, Redux, and Bootstrap. It allows users to add, view, edit, delete, and mark tasks as completed. Tasks are stored in local storage to ensure they persist across page reloads.

## Features
- Add new tasks
- View a list of tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or incomplete
- Persistent storage with local storage

## Demo
[Demo Link](# https://todolist-fb400a.netlify.app/)


## Technologies Used
- React
- Redux
- React-Bootstrap
- FontAwesome
- Local Storage

## Installation

### Prerequisites
- Node.js (>= 12.x)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app

## Install Dependencies
# Using npm:
npm install

# Using yarn:
yarn install

## Running the Application
# To start the development server:
Using npm:
npm start

Using yarn:
yarn start

Open http://localhost:3000 to view it in the browser.

## Building for Production
To build the app for production:
Using npm:
npm run build

Using yarn:
yarn build

The build artifacts will be stored in the build/ directory.

## Project Structure: 
react-todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── ...
│   ├── redux/
│   │   ├── store.js
│   │   ├── taskSlice.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
Usage
# Adding a Task
Enter the task description in the input field.
Press Enter or click the "+" button to add the task.
# Editing a Task
Click the edit icon next to the task you want to edit.
Modify the task description in the modal and click "Save Changes".
# Deleting a Task
Click the trash icon next to the task you want to delete.
# Toggling Task Completion
Click the check/undo icon next to the task to mark it as completed or incomplete.
# Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
