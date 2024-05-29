import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import { getData } from './data';
import CardList from './CardList';
import './styles.css';

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

const root = createRoot(document.getElementById('roott')); 
root.render(<Biodata />);
