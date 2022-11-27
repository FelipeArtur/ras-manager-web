import React from "react";
import "./ProjetoCard.css";

export default function ProjetoCard({description, responsavel, status}) {

    return(
        <div className="project-card">
                <div className="project-description">{description}</div>
                <div className="project-description">{responsavel}</div>
                <div className="status">{status}</div>
            </div>
    );

}