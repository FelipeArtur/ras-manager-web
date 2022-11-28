import "./AddEvent.css";
import CustomInput from "../../../utils/components/CustomInput/CustomInput";

import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddEvent() {

    const [descricao, setDescricao] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [palestrante, setPalestrante] = useState("");
    const [localizacao, setLocalizacao] = useState("");

    function handleChangeInput(ev, changeFunction) {
        changeFunction(ev.target.value);
    }

    return (
        <div className="main-view">
            <div className="add-event-text">ADICIONAR UM EVENTO </div>
            <CustomInput
                type="text"
                placeholder="Descrição"
                maxLength={35}
                onChange={(e) => handleChangeInput(e, setDescricao)}
            />
            <CustomInput
                type="text"
                placeholder="ID do responsável"
                maxLength={35}
                onChange={(e) => handleChangeInput(e, setResponsavel)}
            />
            <CustomInput
                type="text"
                placeholder="Palestrante"
                maxLength={35}
                onChange={(e) => handleChangeInput(e, setPalestrante)}
            />
            <CustomInput
                type="text"
                placeholder="Localização"
                maxLength={35}
                onChange={(e) => handleChangeInput(e, setLocalizacao)}
            />
            <button className="add-btn"
                onClick={() => {
                    Axios.post("http://localhost:3001/eventos/adicionar/" + descricao + "/" + responsavel + "/" + palestrante + "/" + localizacao).then((response) => {
                    }).finally(() => {
                        // setDescricao("");
                        // setPalestrante("");
                        // setResponsavel("");
                    });
                }
                }
            >
                ADICIONAR
            </button>
            <button className="back-to-event-btn">
                <Link className="btn-text" to="/eventos">VOLTAR</Link>
                </button>
        </div>
    );
}