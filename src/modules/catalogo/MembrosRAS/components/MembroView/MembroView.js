import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { DataFormat } from "../../../../../utils/classes/DataFormat";

import "./MembroView.css";

export default function MembroView() {

    const {id} = useParams();

    const [pessoa, setPessoa] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/pessoa/" + id).then((response) => {
            setPessoa(response.data);
        });
    }, [id]);

    let data = new DataFormat();

    return (
        <div className="membro-view-card">        
            <div className="membro-card-options">
                    <Link to={"/membros"} className="membro-card-close">X</Link>
                {typeof pessoa !== "undefined" && pessoa.map((value) => {
                    return (<>
                        <div className="member-view-column">
                            <div className="selected-member-name">{value.NOME}</div>
                            <div className="selected-member-email">{value.EMAIL}</div>
                            <div className="selected-member-ativo">(Usuário {value.ATIVO})</div>

                            <div className="selected-member-in-project-row">
                                <div className="selected-member-in-project">Este membro {value.PROJETO_ID !== null ? "está" : "não está"} em algum projeto!</div>
                            </div>

                            <div className="selected-member-in-project-row">
                                <div className="selected-member-data-entered-course">
                                    Ingressou no curso em {data.sqlToJsDate(value.DT_INGRESSO_CURSO)}
                                </div>
                            </div>

                            <div className="selected-member-in-project-row">
                                <div className="selected-member-data-entered-ras">
                                    Ingressou no RAS em {data.sqlToJsDate(value.DT_INGRESSO_RAS)}
                                </div>
                            </div>

                        </div>
                    </>);
                })}
            </div>
        </div>
    );

    

}