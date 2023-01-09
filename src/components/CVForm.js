import React from 'react';

function CVForm(props) {
  const { homework, ChangeHomework, tasks, ChangeTask, AddTask, DeleteTask } =
    props;

  return (
    <div className='input-container'>
      <input
        onChange={ChangeHomework}
        value={homework.text}
        type='text'
        name='homework'
        placeholder='Enter Homework'
      />

      {tasks.map((task, i) => {
        return (
          <input
            onChange={ChangeTask}
            value={task.text}
            key={task.id}
            id={task.id}
            type='text'
            name='task'
            placeholder='Enter task'
          />
        );
      })}

      <button onClick={AddTask}>Add Task</button>
      <button onClick={DeleteTask}>Delete Task</button>
    </div>
  );
}

export default CVForm;
