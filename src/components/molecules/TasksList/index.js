import React from 'react';
import TaskCard from '../TaskCard';

const Taskslist = ({ tasksArray, listVariant }) => {
  return (
    <ul>
      {tasksArray
        .filter(({ variant }) => variant === listVariant)
        .map(({ isEditable, title, content, id }) => (
          <li key={id}>
            <TaskCard
              isEditable={isEditable}
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
