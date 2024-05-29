// indexPAS.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header_PAS from './Header_PAS';
import { getData } from './Data_PAS';
import CardList_PAS from './CardList_PAS';
import './styles.css';

class Biodata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTumbuhan: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const dataTumbuhan = this.state.dataTumbuhan.filter((tumbuhan) => tumbuhan.id !== id);
    this.setState({ dataTumbuhan });
  }

  render() {
    const { dataTumbuhan } = this.state;
    return (
      <div className='biodata'>
        <Header_PAS />
        <CardList_PAS dataTumbuhan={dataTumbuhan} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Biodata />);
