import React from "react";

import "./CustomCheckBox.css";

export default class CustomCheckBox extends React.Component {
    render() {
        return(
            <div className="checkbox-row">
                <input className="custom-checkbox" type="checkbox"/>
                <h3 className="habilidade-text">{this.props.habilidade}</h3>
            </div>
        );
    }
}