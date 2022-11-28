import React from "react";
import "./MembroCard.css";

export default function MembroCard({name, member_class, email}) {
    return (
        <div className="ras-member-card">
            <div className="member-name">{name}</div>
            <div className="member-class">{member_class}</div>
            <a className="member-email" href={`mailto:${email}`}>{email}</a>
            
        </div>
    );
}