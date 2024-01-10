import React, { Component } from 'react'
import Operan from "./Operan";

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            makanan : "Bakso",
            minuman : "es teh"
        };
    }

    gantiMakanan = (makanan_baru) => {
         this.setState({ makanan: makanan_baru})
    };
    gantiMinuman = (minuman_baru) => {
        this.setState({minuman: minuman_baru})
           };
       

  render() {
    return (
        <>
      <div>{this.state.makanan}</div>
      <button onClick={() => this.gantiMakanan("soto")}>
        ganti makanan
      </button>
      <Operan makanan ={this.state.makanan} />
      <div>{this.state.minuman}</div>
      <button onClick={() => this.gantiMinuman("es jeruk")}>
        ganti minuman
      </button>
      </>
      )
  }
}
