import React from "react";
import "./BaseCatalogo.css";


export default class BaseCatalogo extends React.Component {
    render() {
        return (
            <div className="catalogo-ras">
                <>
                    <div className="title-row">
                        <h1 className="catalogo-sub-title">{this.props.title}</h1>
                    </div>
                    <div className="sep-line"></div>
                    <div className="cards-view">
                    {this.props.children}
                    </div>
                </>
            </div>
        );
    }
}