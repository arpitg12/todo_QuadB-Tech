import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <ListGroup>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListGroup>
  );
};

export default TaskList;
