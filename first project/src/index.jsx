import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import { getData } from './data';
import DeleteButton from './deleteButton';
import './styles.css';

// Assuming you have the CardList component defined somewhere. 
// If not, you will need to create it.
function CardList({ dataSiswa, onDelete }) {
  return (
    <div className='card-list'>
      {dataSiswa.map((siswa) => (
        <Card
          key={siswa.id}
          id={siswa.id}
          Nama={siswa.Nama}
          Kelas={siswa.Kelas}
          Alamat={siswa.Alamat}
          Foto={siswa.Foto}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

// REACT COMPONENT
class Biodata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSiswa: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const dataSiswa = this.state.dataSiswa.filter((siswa) => siswa.id !== id);
    this.setState({ dataSiswa });
  }

  render() {
    const { dataSiswa } = this.state;
    return (
      <div className='biodata'>
        <Header />
        <CardList dataSiswa={dataSiswa} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

function CardBody({ Nama, Kelas, Alamat }) {
  return (
    <div className="card-body">
      <p>Nama : {Nama}</p>
      <p>Kelas : {Kelas}</p>
      <p>Alamat : {Alamat}</p>
    </div>
  );
}

function CardImage({ Foto }) {
  return (
    <img src={Foto} alt="Foto" />
  );
}

function Card({ id, Nama, Kelas, Alamat, Foto, onDelete }) {
  return (
    <div className="card">
      <CardImage Foto={Foto} />
      <CardBody Nama={Nama} Kelas={Kelas} Alamat={Alamat} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Biodata />);
