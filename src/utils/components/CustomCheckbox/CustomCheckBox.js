import React from "react";

import "./CustomCheckBox.css";

export default function CustomCheckBox({habilidade, onChange}) {
    return(
        <div className="checkbox-row">
            <input className="custom-checkbox" type="checkbox" onChange={onChange}/>
            <h3 className="habilidade-text">{habilidade}</h3>
        </div>
    );
}