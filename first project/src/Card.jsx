import React from 'react';
import CardBody from './CardBody';
import CardImage from './CardImage';
import DeleteButton from './deleteButton';
import './styles.css';

function Card({ id, Nama, Kelas, Alamat, Foto, onDelete }) {
  return (
    <div className="card">
      <CardImage Foto={Foto} />
      <CardBody Nama={Nama} Kelas={Kelas} Alamat={Alamat} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default Card;