import { useState, useEffect } from "react";
import "./AddMeeting.css";

import CustomImput from "../../../utils/components/CustomInput/CustomInput";
import DropdownTile from "./components/DropdownTile";

import Axios from "axios";
import { Link } from "react-router-dom";

export default function AddMeeting() {

    const [show, setShow] = useState(false);

    const [pessoasDropdown, setPessoasDropdown] = useState([]);

    const [responsavel, selectedResonsavel] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/pessoas").then((response) => {
            setPessoasDropdown(response.data);
        });
    }, []);

    function handleButton() {
        setShow(!show);
    }

    return (
        <div className="add-meeting-main-view">
            <div className="meet-inputs">
                <CustomImput
                    placeholder={"Descrição"}
                    maxLength={30}
                />
                <CustomImput
                    placeholder={"Localização"}
                    maxLength={30}
                />
                <CustomImput
                    placeholder={"Data / Hora"}
                    maxLength={30}
                />
                <CustomImput
                    placeholder={"ATA"}
                    maxLength={30}
                />
            </div>
            <button className="responsavel-dropdown"  onClick={handleButton}>
                <h2 className="dropdown-text">Selecione um responsavel</h2>
            </button>
            <div className="responsaveis-overflow">
            {show === false ? <div className="dropdown-invisible"/> : 
            (typeof pessoasDropdown != "undefined" && pessoasDropdown.map((value) => {
                return <DropdownTile nomePessoa={value.NOME}
                    onClick={() => {
                        selectedResonsavel(value.NOME);
                        handleButton();
                    }}
                />
            }))
            }
            </div>
            {responsavel !== "" ? <h3 className="responsavel-selecionado">Responsável: {responsavel}</h3> : ""}
            <button>Salvar</button>
            <button>
                <Link to={"/eventos"}>Criar Evento</Link>
            </button>
        </div>
    );
}