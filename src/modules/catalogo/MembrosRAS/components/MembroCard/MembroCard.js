import React from "react";
import { Link } from "react-router-dom";
import "./MembroCard.css";

export default function MembroCard({id, name, member_class, email}) {
    
    return (
        <div className="ras-member-card">
            <Link to={"/membro/" + id} className="member-name">{name}</Link>
            <div className="member-class">{member_class}</div>
            <a className="member-email" href={`mailto:${email}`}>{email}</a>
            
        </div>
    );
}