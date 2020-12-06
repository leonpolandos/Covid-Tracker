import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tabel from './Tabel';
import './provinsi.css';

const Provinsi = () => {

  const [provinsiIndonesia, setprovIndo] = useState([]);
    
  useEffect(() => {
    axios
    .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((response) => setprovIndo(response.data.data));    
  },[]);

  return (
    <>
      <table>
        <tbody>
            <tr> 
              <th> Provinsi </th>
              <th> Positif </th>
              <th> Sembuh </th>
              <th> Meninggal </th>
            </tr>
        </tbody>
        {
          provinsiIndonesia.map((item) => {
            return (
              <>
                <tbody>
                    <tr>
                      <td className="provinsi" > <Tabel provinsi={item.provinsi}/></td>
                      <td className="positif"> <Tabel kasusPositif={item.kasusPosi}/></td>
                      <td className="sembuh"> <Tabel kasusSembuh={item.kasusSemb}/></td>
                      <td className="meninggal"> <Tabel kasusMeninggal={item.kasusMeni}/></td>
                    </tr>
                </tbody>
              </>  
            )
          })
        }
  
      </table>
    </>
  )
  }

export default Provinsi;