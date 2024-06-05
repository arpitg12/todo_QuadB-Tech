import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Hook to dispatch actions
import { addTask } from '../redux/taskSlice'; // Action to add a new task
import { v4 as uuidv4 } from 'uuid'; // Library to generate unique IDs for tasks
import { Button, Form, InputGroup } from 'react-bootstrap'; // Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome component
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icon
import './TaskInput.css';

const TaskInput = () => {
  // State to hold the input text
  const [taskText, setTaskText] = useState('');

  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check if the input is not empty
    if (taskText.trim()) {
      // Dispatch the addTask action with a new task object
      dispatch(addTask({ id: uuidv4(), text: taskText, completed: false }));
      // Clear the input field
      setTaskText('');
    }
  };

  return (
    <InputGroup className="mb-3 input">
      {/* Input field for task text */}
      <Form.Control
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Update state on input change
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()} // Add task on Enter key press
      />
      {/* Button to add the task */}
      <Button onClick={handleAddTask}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
