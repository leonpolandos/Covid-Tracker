import React, { Component } from 'react';
import './global.css'


class Global extends Component{
    constructor() {
        super();
        this.state = { 
            positif: [],
            sembuh: [],
            meninggal: [],
        }
    }
  
    componentDidMount (){
        fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(json => (
                this.setState({positif: json.confirmed.value}),
                this.setState({sembuh: json.recovered.value}),
                this.setState({meninggal: json.deaths.value})
            ))
    }
  
    render() {
      return (
        <div className="globalStyle-container">
            <h1> GLOBAL </h1>
            <div className="positif-container">
                Positif: {this.state.positif}
            </div>
            <div className="sembuh-container">
                Sembuh: {this.state.positif}
            </div>
            <div className="meninggal-container">
                Meninggal: {this.state.meninggal}  
            </div>
          
        </div>
      )
    }
  
  }

export default Global;