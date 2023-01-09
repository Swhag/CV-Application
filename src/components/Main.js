import React, { Component, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CVForm from './CVForm';
import CVPreview from './CVPreview';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      homework: {
        text: '',
        id: uuidv4(),
      },

      tasks: [],
    };
  }

  handleChangeHomework = (e) => {
    this.setState({
      homework: {
        text: e.target.value,
        id: this.state.homework.id,
      },
    });
  };

  handleChangeTask = (e) => {
    const { id } = e.target;
    let tasksCopy = [...this.state.tasks];
    let task = tasksCopy.find((task) => task.id === id);

    task.text = e.target.value;

    this.setState({
      tasks: [...tasksCopy],
    });
  };

  handleAddTask = () => {
    const newTask = {
      text: '',
      id: uuidv4(),
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  handleDeleteTask = () => {
    let tasks = [...this.state.tasks];

    tasks = tasks.slice(0, tasks.length - 1);

    this.setState({
      tasks: [...tasks],
    });
  };

  render() {
    const {
      homework,
      handleChangeHomework,
      tasks,
      handleChangeTask,
      handleAddTask,
      handleDeleteTask,
    } = this.state;

    return (
      <div className='cv-container'>
        <div className='cv-form'>
          <CVForm
            homework={homework}
            changeHomework={handleChangeHomework}
            tasks={tasks}
            ChangeTask={handleChangeTask}
            AddTask={handleAddTask}
            DeleteTask={handleDeleteTask}
          ></CVForm>
        </div>
        <div className='cv-view'>
          <CVPreview homework={homework} tasks={tasks}></CVPreview>
        </div>
      </div>
    );
  }
}

export default Main;
