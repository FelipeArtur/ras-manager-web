import React from "react";
import { Link } from "react-router-dom";
import "./CatalogoCard.css";
export default class CatalogoCard extends React.Component {
    render() {
        return (
            <div id="card" className="cat-card" onClick={this.navegar}>
                <img alt="Card Icon" src={this.props.icon} className="card-icon"/>
                <Link className="card-title" to={this.props.path}>{this.props.title}</Link>
            </div>
        );
    }
}