import './ReuniaoCard.css';

export default function ReuniaoCard({nome, local, horario}) {
    return (
        <div className="ras-member-card">
            <div className="member-name">{nome}</div>
            <div className="member-local">{local}</div>
            <div className="member-horario">{horario}</div>
            
        </div>
    );
}