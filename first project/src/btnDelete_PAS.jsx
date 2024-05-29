import React from 'react';

function btnDelete({ id, onDelete }) {
  return (
    <button className='card__delete' onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default btnDelete;
