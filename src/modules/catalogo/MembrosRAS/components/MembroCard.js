import React from "react";
import "./MembroCard.css";

export default class MembroCard extends React.Component {
    render() {
        return (
            <div className="ras-member-card">
                <div className="member-name">{this.props.name}</div>
                <div className="member-class">{this.props.class}</div>
                <a className="member-email" href={`mailto:${this.props.email}`}>{this.props.email}</a>
                
            </div>
        );
    }
}