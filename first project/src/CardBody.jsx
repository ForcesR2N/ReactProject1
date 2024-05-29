import React from 'react';

function CardBody({ Nama, Kelas, Alamat }) {
  return (
    <div className="card-body">
      <p>Nama : {Nama}</p>
      <p>Kelas : {Kelas}</p>
      <p>Alamat : {Alamat}</p>
    </div>
  );
}

export default CardBody;