import React from "react";
import { Link } from "react-router-dom";
import "./ProjetoCard.css";

export default function ProjetoCard({description, responsavel, status, id}) {

    return(
        <div className="project-card">
                <Link to={`/projeto/${id}`} className="project-description">{description}</Link>
                <div className="project-description">{responsavel}</div>
                <div className="status">{status}</div>
            </div>
    );

}