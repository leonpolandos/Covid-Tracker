import react, {Component, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { Global, Indonesia, Provinsi } from './Pages';


const App = () => {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/global">Global</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/provinsi">Provinsi</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/">
            <Route path="/global">
              <Global/>
            </Route>
            <Route path="/indonesia">
              <Indonesia/>
            </Route>
            <Route path="/provinsi">
              <Provinsi/>
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// const App = () => {

//   let [confirmed, setState] = useState([]);

//   useEffect(() =>  {
//     axios 
//       .get("https://covid19.mathdro.id/api")
//       .then((response) => setState(response.data))
//   }, []);

//   return (
//     <>
//       {confirmed.map((item) => {
//         return (
//           <Cards
//             value={item.value}
//             detail={item.detail}
//           />
//         )
//       })}
//     </>
//   )
    
// };
export default App;
