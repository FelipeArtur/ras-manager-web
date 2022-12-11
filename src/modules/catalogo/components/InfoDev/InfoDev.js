import "./InfoDev.css";

export default function InfoDev() {

    return (
        <div className="devinfo-view">
            <h2 className="info-title-text">RAS Manager</h2>
            <div className="info-sec-row">
                <h3>Planejado e desenvolvido por:</h3>
                <li>Amanda Rigaud</li>
                <li>Felipe Ribeiro</li>
                <li>Guilherme Almeida</li>
                <li>Jorge Ricarte</li>
                <li>Rodrigo Macedo</li>
            </div>
            <div className="info-sec-row">
                <h3>Docentes:</h3>
                <li>Marcio Soussa</li>
                <li>Hilton Vicente</li>
            </div>
            <div className="info-sec-row">
                <h3>Créditos:</h3>
                <li>IEEE RAS Cimatec</li>
            </div>
        </div>
    );

}