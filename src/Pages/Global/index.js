import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import './global.css'

const Global = () => {
    const [positif, setPositif] = useState([]);
    const [sembuh, setSembuh] = useState([]);
    const [meninggal, setMeninggal] = useState([]);
    

    useEffect(() =>  {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => (
                // eslint-disable-next-line no-sequences
                setPositif(response.data.confirmed),
                setSembuh(response.data.recovered),
                setMeninggal(response.data.deaths)
            ))
    }, []);
    
    return (
        <div className="globalStyle-container">
            <h3>Jumblah Kasus Dunia:</h3>
            <div className="positif-container">
                <NumberFormat value={positif.value} displayType={'text'} thousandSeparator={true} renderText={positif => <div><>Positif: </>{positif}</div>}>{positif.value}</NumberFormat>
            </div>
            <div className="sembuh-container">
                <NumberFormat value={sembuh.value} displayType={'text'} thousandSeparator={true} renderText={sembuh => <div><>Sembuh: </>{sembuh}</div>}>{positif.value}</NumberFormat>
            </div>
            <div className="meninggal-container">
                <NumberFormat value={meninggal.value} displayType={'text'} thousandSeparator={true} renderText={meninggal => <div><>Meninggal: </>{meninggal}</div>}>{meninggal.value}</NumberFormat>
            </div>
    </div>
    )
}

export default Global;