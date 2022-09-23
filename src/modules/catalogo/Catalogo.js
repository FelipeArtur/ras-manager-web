import React from "react";
import "./Catalogo.css"

import CatalogoCard from "./components/CatalogoCard/CatalogoCard";

import person from "../../assets/person.svg";
import reunioes from "../../assets/reunioes.svg";

export default class Catalogo extends React.Component {
    render() {
        return (
            <div className="ras-catalogo">
                <CatalogoCard icon={person} title="Membros da RAS"/>
                <CatalogoCard icon={person} title="Eventos"/>
                <CatalogoCard icon={reunioes} title="Reuniões"/>
                <CatalogoCard icon={person} title="Projetos"/>
            </div>
        );
    }
}