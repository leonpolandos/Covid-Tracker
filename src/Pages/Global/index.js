import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './global.css'


// class Global extends Component{
//     constructor() {
//         super();
//         this.state = { 
//             positif: [],
//             sembuh: [],
//             meninggal: [],
//         }
//     }
  
//     componentDidMount (){
//         fetch('https://covid19.mathdro.id/api')
//             .then(response => response.json())
//             .then(json => (
//                 this.setState({positif: json.confirmed.value}),
//                 this.setState({sembuh: json.recovered.value}),
//                 this.setState({meninggal: json.deaths.value})
//             ))
//     }
  
//     render() {
//       return (
//         <div className="globalStyle-container">
//             <h1> GLOBAL </h1>
//             <div className="positif-container">
//                 Positif: {this.state.positif}
//             </div>
//             <div className="sembuh-container">
//                 Sembuh: {this.state.positif}
//             </div>
//             <div className="meninggal-container">
//                 Meninggal: {this.state.meninggal}  
//             </div>
          
//         </div>
//       )
//     }
  
//   }

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
                Positif: {positif.value}
            </div>
            <div className="sembuh-container">
                Sembuh: {sembuh.value}
            </div>
            <div className="meninggal-container">
                Meninggal: {meninggal.value}
            </div>
    </div>
    )
}

export default Global;