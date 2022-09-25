import React from "react";
import "./Catalogo.css"

import CatalogoCard from "./components/CatalogoCard/CatalogoCard";

import person from "../../assets/person.svg";
import reunioes from "../../assets/reunioes.svg";

export default class Catalogo extends React.Component {
    render() {
        return (
            <div className="ras-catalogo">
                <CatalogoCard path="/membros" icon={person} title="Membros da RAS"/>
                <CatalogoCard path="/eventos" icon={person} title="Eventos"/>
                <CatalogoCard path="/reunioes" icon={reunioes} title="Reuniões"/>
                <CatalogoCard path="/projetos" icon={person} title="Projetos"/>
            </div>
        );
    }
}