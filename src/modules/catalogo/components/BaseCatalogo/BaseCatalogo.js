import React from "react";
import "./BaseCatalogo.css";


export default function BaseCatalogo({title, children}) {
        return (
            <div className="catalogo-ras">
                <>
                    <div className="title-row">
                        {title}
                    </div>
                    <div className="sep-line"></div>
                    <div className="cards-view">
                    {children}
                    </div>
                </>
            </div>
        );
}