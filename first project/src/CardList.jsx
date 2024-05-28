import React from 'react';
import Card from './Card';

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

export default CardList;