import React from "react";
import "./MembrosRAS.css";

import BaseCatalogo from "../components/BaseCatalogo"
import MembroCard from "./components/MembroCard";


export default class MembrosRAS extends React.Component {
    render() {
        return (
            <BaseCatalogo title={
                <h1>Membros<br/>RAS</h1>
            }
            children={
                <>
                <MembroCard/>
                <MembroCard/>
                <MembroCard/>
                <MembroCard/>
                </>
            }
            >
            </BaseCatalogo>
        );
    }
}