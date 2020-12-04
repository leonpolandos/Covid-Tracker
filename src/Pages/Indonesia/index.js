import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
                Jumblah Kasus Keseluruhan: {jumblahKasus.jumlahKasus}
            </div>
            <div className="perawatan-container">
                Perawatan: {perawatanCovid.perawatan}
            </div>
            <div className="sembuh-container">
                Sembuh: {sembuhCovid.sembuh}
            </div>
            <div className="meninggal-container">
                Meninggal: {meninggalCovid.meninggal}
            </div>
        </div>
    )
}

export default Indonesia;