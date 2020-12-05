import axios from 'axios';
import React, { Component,useEffect, useState } from 'react';
import Tabel from './Tabel';
import './provinsi.css';

// class Provinsi extends Component {
//     constructor() {
//         super();
//         this.state= {
//             users: []
//         }
//     }

//     renderItem = ({ item }) => {
//         <table>
//             <tr>
//                 <th>Provinsi</th>
//                 <th>Positif</th>
//                 <th>Sembuh</th>
//                 <th>Meninggal</th>
//             </tr>
//             <tr>
//                 <td>{item.provinsi}</td>
//                 <td>{item.kasusPosi}</td>
//                 <td>{item.kasusSemb}</td>
//                 <td>{item.kasusMeni}</td>
//             </tr>
//         </table>

//     }

//     componentDidMount = () => {
//         fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
//             .then(response => response.json())
//             .then(json => this.setState({users : json, refreshing: false}))
//     }

//     render() {
//         return (
//             <>
//                 {this.state.users.data}
//                 {this.renderItem} 
//             </>
//         )
//     }
// }

// const Provinsi = () => {
//     const [users, setUsers] = useState([]);
    

//     useEffect(() =>  {
//         axios
//             .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
//             .then((response) => setUsers(response.data))
//     }, []);
//     console.log(users)
    
//     return (
//         <>
//             {[users].map((item) => {
//                 return(
//                 <>
//                     <tr>
//                         <th>Provinsi</th>
//                         <th>Positif</th>
//                         <th>Sembuh</th>
//                         <th>Meninggal</th>
//                     </tr>
//                     <tr>
//                         <td>{item.provinsi}</td>
//                         <td>{item.kasusPosi}</td>
//                         <td>{item.kasusSemb}</td>
//                         <td>{item.kasusMeni}</td>
//                     </tr>
//                 </>
//                 )
//             })}
//         </>
//     );
// };
const Provinsi = () => {

const [users, setUsers] = useState([]);
  
useEffect(() => { /* useEffect sama seperti ComponentDidMount dalam Class Component*/
  axios
  .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
  .then((response) => setUsers(response.data.data));    
}, []);

return (
  <>
  {
    users.map((item) => {
      return (
        <Tabel
          provinsi={item.provinsi} 
          kasusPositif={item.kasusPosi}
          kasusSembuh={item.kasusSemb} 
          kasusMeninggal={item.KasusMeni} 
        />
      )
    })
  }
  </>
 )
}

export default Provinsi;