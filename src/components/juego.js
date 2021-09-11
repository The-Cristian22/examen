import React, { Component } from "react";
import Historia from "./data.json";
import Seleccion from "./seleccion";
import Recordatorio from "./recordatorio";

const historial = []

class juego extends Component{
    constructor(props){
        super(props);
        this.state = {
            selection : 0,
            selectionLetter : ""
        }
    }
    componentDidMount(){
        Historia.push(Historia.shift());
    }
    componentDidUpdate(prevProps, prevState){
        Historia.push(Historia.shift());
        Historia.push(Historia.shift());

        historial.push(this.state.selectionLetter);
        
        if(historial.length == 5 ){
            alert("FIN");
            window.location.replace("");
            historial = []
        }
    }

    handleClick = (e) => {
        if(e.target.id == "A"){
            this.setState({selection : 0, selectionLetter : "A"})
        }
        else{
            this.setState({selection : 1, selectionLetter : "B"})
        }
    }

    render(){
        return(
            <div className="layout">

                <h1 className = "historia">
                    {Historia[this.state.selection].historia}
                </h1>

                <div className = "opciones">
                    <Seleccion storyId="A" storyOption={Historia[this.state.selection].opciones.a} handleClick={this.handleClick}/>
                    <Seleccion storyId="B" storyOption={Historia[this.state.selection].opciones.b} handleClick={this.handleClick}/>
                </div>
                <Recordatorio lastSelection={this.state.selectionLetter} historial={historial.map(
                    (event, index) => (
                        <li key={index}>{event}</li>
                    ),
                    Historia[this.state.selection].id
                )}/>
            </div>
        )
    }
}

export default juego