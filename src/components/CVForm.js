import React from 'react';

function CVForm(props) {
  const {
    homework,
    handleChangeHomework,
    tasks,
    handleChangeTask,
    handleAddTask,
    handleDeleteTask,
  } = props;

  return (
    <div className='input-container'>
      <input
        onChange={handleChangeHomework}
        value={homework.text}
        type='text'
        name='homework'
        placeholder='Enter Homework'
      />

      {tasks.map((task, i) => {
        return (
          <input
            onChange={handleChangeTask}
            value={task.text}
            key={task.id}
            id={task.id}
            type='text'
            name='task'
            placeholder='Enter task'
          />
        );
      })}

      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
}

export default CVForm;
