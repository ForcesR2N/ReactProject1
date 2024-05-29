import React from 'react';
import CardBody_PAS from './CardBody_PAS';
import CardImage_PAS from './CardImage_PAS';
import BtnDelete from './btnDelete_PAS'; 

function Card_PAS({ id, Nama, Jenis, Warna, Foto, onDelete }) {
  return (
    <div className="card">
      <CardImage_PAS Foto={Foto} />
      <CardBody_PAS Nama={Nama} Jenis={Jenis} Warna={Warna} />
      <BtnDelete id={id} onDelete={onDelete} /> 
    </div>
  );
}

export default Card_PAS;
