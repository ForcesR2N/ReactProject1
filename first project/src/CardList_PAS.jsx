import React from 'react';
import Card_PAS from './Card_PAS';

function CardList_PAS({ dataTumbuhan, onDelete }) {
  return (
    <div className='card-list'>
      {dataTumbuhan.map((tumbuhan) => (
        <Card_PAS
          key={tumbuhan.id}
          id={tumbuhan.id}
          Nama={tumbuhan.Nama}
          Jenis={tumbuhan.Jenis}
          Warna={tumbuhan.Warna}
          Foto={tumbuhan.Foto}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CardList_PAS;
