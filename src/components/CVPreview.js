import React from 'react';

function CVPreview(props) {
  const { homework, tasks } = props;

  return (
    <div className='preview-container'>
      <ul>
        <li key={homework.id}>
          <div className='text-output'>Homework: {homework.text}</div>
        </li>

        {tasks.map((task, i) => {
          return (
            <li key={task.id}>
              <div className='text-output'>Task: {task.text}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CVPreview;
