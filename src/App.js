import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container } from 'react-bootstrap';
import './Header.css';

const App = () => {
  return (
    <Container className="mt-5">
     <div className='headings'>
        <h1 children='title'>To-Do List</h1>
    </div>
      <div style={{marginTop:'150px'}}>
      <TaskInput />
      <TaskList />
      </div>
    </Container>
  );
};

export default App;
