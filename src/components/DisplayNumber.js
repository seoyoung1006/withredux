import React, {Component} from "react";

class DisplayNumber extends Component{
    render(){
        return(
            <div>
                <h1>Display Number</h1>
                <input type="text" value="0" readonly></input>
            </div>
        )
    }
}

export default DisplayNumber;