import React from "react";
import './CustomButton.css';

export default class CustomButton extends React.Component {

    
    render() {
        if (this.props.navTo === "") {
            this.props.navTo = "/catalogo";
        }
        return(
            <button className="custom-btn" onClick={this.props.onClick} disabled={false}>
                {this.props.text}
            </button>
        );
    }
}