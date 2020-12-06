import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import './indonesia.css'

const Indonesia = () => {
    const [perawatanCovid, setpIndonesia] = useState([]);
    const [sembuhCovid, setsIndonesia] = useState([]);
    const [meninggalCovid, setmIndonesia] = useState([]);
    const [jumblahKasus, setjmIndonesia] = useState([]);
    
    useEffect(() =>  {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api")
            .then((response) => (
                // eslint-disable-next-line no-sequences
                setpIndonesia(response.data),
                setsIndonesia(response.data),
                setmIndonesia(response.data),
                setjmIndonesia(response.data)
            ))
    }, []);
    return (
        <div className="globalindonesiaStyle-container">
            <div>Jumblah Kasus Indonesia:</div>
            <div className="jumblahKasus-container">
            <NumberFormat value={jumblahKasus.jumlahKasus} displayType={'text'} thousandSeparator={true} renderText={jumblahKasus => <div><>Jumblah Kasus: </>{jumblahKasus}</div>}>{jumblahKasus.jumlahKasus}</NumberFormat>
            </div>
            <div className="perawatan-container">
            <NumberFormat value={perawatanCovid.perawatan} displayType={'text'} thousandSeparator={true} renderText={perawatanCovid => <div><>Perawatan: </>{perawatanCovid}</div>}>{perawatanCovid.perawatan}</NumberFormat>
            </div>
            <div className="sembuh-container">
            <NumberFormat value={sembuhCovid.sembuh} displayType={'text'} thousandSeparator={true} renderText={sembuhCovid => <div><>Sembuh: </>{sembuhCovid}</div>}>{sembuhCovid.sembuh}</NumberFormat>
            </div>
            <div className="meninggal-container">
            <NumberFormat value={meninggalCovid.meninggal} displayType={'text'} thousandSeparator={true} renderText={meninggalCovid => <div><>Meninggal: </>{meninggalCovid}</div>}>Meninggal: {meninggalCovid.meninggal}</NumberFormat>
            </div>
        </div>
    )
}

export default Indonesia;