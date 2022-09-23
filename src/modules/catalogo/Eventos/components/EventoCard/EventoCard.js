import React from "react";
import "./EventoCard.css";

import calendar from "../../../../../assets/calendar.svg";
import place from "../../../../../assets/place.svg";

export default class EventoCard extends React.Component {
    render() {
        return (
            <div className="ras-event-card">
                <div className="event-title">{this.props.title}</div>
                <div className="flex-row">
                    <img src={calendar} alt="Ícone calendário" className="icon"/>
                    <div className="event-date">{this.props.date}</div>
                </div>
                <div className="flex-row">
                <img src={place} alt="Ícone local" className="icon"/>
                    <div className="event-local">{this.props.local}</div>
                </div>
            </div>
        );
    }
}