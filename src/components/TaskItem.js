import React, { useState } from 'react'; // Import React and useState hook
import { useDispatch } from 'react-redux'; // Hook to dispatch actions
import { deleteTask, editTask, toggleTask } from '../redux/taskSlice'; // Actions to delete, edit, and toggle tasks
import { Button, ListGroup, Modal, Form } from 'react-bootstrap'; // Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome component
import { faTrash, faEdit, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

const TaskItem = ({ task }) => {
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const [show, setShow] = useState(false); // State to manage the visibility of the edit modal
  const [editText, setEditText] = useState(task.text); // State to hold the edited text

  // Function to handle deleting a task
  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Dispatch the deleteTask action with the task id
  };

  // Function to handle editing a task
  const handleEdit = () => {
    dispatch(editTask({ id: task.id, text: editText })); // Dispatch the editTask action with the task id and new text
    setShow(false); // Close the edit modal
  };

  // Function to handle toggling the completion status of a task
  const handleToggle = () => {
    dispatch(toggleTask(task.id)); // Dispatch the toggleTask action with the task id
  };

  return (
    <ListGroup.Item className={`d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`}>
      <div>
        {/* Button to toggle task completion status */}
        <Button variant="link" onClick={handleToggle}>
          <FontAwesomeIcon icon={task.completed ? faUndo : faCheck} /> {/* Show different icon based on task completion */}
        </Button>
        {task.text} {/* Display the task text */}
      </div>
      <div>
        {/* Button to open the edit modal */}
        <Button variant="primary" onClick={() => setShow(true)} className="mr-2">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        {/* Button to delete the task */}
        <Button variant="danger" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>

      {/* Modal for editing the task */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editText} // Value of the input is bound to editText state
            onChange={(e) => setEditText(e.target.value)} // Update state on input change
          />
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal without saving */}
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          {/* Button to save changes and close the modal */}
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
};

export default TaskItem;
