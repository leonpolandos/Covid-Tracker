import react from 'react';
import './provinsi.css'

const Tabel = ({provinsi, kasusPositif, kasusSembuh, kasusMeninggal}) => {
    return (
        <table>
            <tr>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
            </tr>
            <tr>
                <td>{provinsi}</td>
                <td>{kasusPositif}</td>
                <td>{kasusSembuh}</td>
                <td>{kasusMeninggal}</td>
            </tr>
        </table>
    )
}


export default Tabel;