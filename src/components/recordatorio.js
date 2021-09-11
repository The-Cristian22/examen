import React, { Component } from "react";

class Recordatorio extends Component{
    render(){
        return(
            <div className="recordatorio">
                <h2>seleccion anterior: {this.props.lastSelection}</h2>
                <h3>historial de opciones elegidas: </h3>
                <ul>{this.props.historial}</ul>
                <h4>--------------- :D D: ------------</h4>
            </div>
        )
    }
}
export default Recordatorio