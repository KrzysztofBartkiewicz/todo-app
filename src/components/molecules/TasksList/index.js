import React from 'react';
import TaskCard from '../TaskCard';

const Taskslist = ({ tasksArray, listVariant }) => {
  return (
    <ul>
      {tasksArray
        .filter(({ variant }) => variant === listVariant)
        .map(({ title, content, id, variant }) => (
          <li key={id}>
            <TaskCard
              variant={variant}
              title={title}
              content={content}
              id={id}
            />
          </li>
        ))}
    </ul>
  );
};

export default Taskslist;
