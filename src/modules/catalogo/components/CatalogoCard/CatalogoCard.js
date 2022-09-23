import React from "react";
import "./CatalogoCard.css";

export default class CatalogoCard extends React.Component {
    render() {
        return (
            <div className="cat-card">
                <img alt="Card Icon" src={this.props.icon} className="card-icon"/>
                <h2 className="card-title">{this.props.title}</h2>
            </div>
        );
    }
}