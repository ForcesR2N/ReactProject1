import React from 'react';

function CardBody_PAS({ Nama, Jenis, Warna }) {
  return (
    <div className="card-body">
      <p>Nama : {Nama}</p>
      <p>Jenis : {Jenis}</p>
      <p>Warna : {Warna}</p>
    </div>
  );
}

export default CardBody_PAS;
