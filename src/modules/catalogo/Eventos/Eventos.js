import React from "react"
import BaseCatalogo from "../components/BaseCatalogo";
import EventoCard from "./components/EventoCard/EventoCard";

export default class Eventos extends React.Component {
    render() {
        return (
            <BaseCatalogo title={
                <h1>Eventos</h1>
            } children={
                <>
                    <EventoCard
                        title="Palestra sobre Flutter"
                        date="12/12/2022"
                        local="SENAI Cimatec"
                    />
                    <EventoCard
                        title="Palestra sobre Flutter"
                        date="12/12/2022"
                        local="SENAI Cimatec"
                    />
                    <EventoCard
                        title="Palestra sobre Flutter"
                        date="12/12/2022"
                        local="SENAI Cimatec"
                    />
                </>
            }>

            </BaseCatalogo>
        );
    }
}