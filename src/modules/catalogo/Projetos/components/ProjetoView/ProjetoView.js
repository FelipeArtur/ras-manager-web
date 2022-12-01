import "./ProjetoView.css";

import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjetoView() {

    const {id} = useParams();

    const [projeto, setProjeto] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/projeto/${id}`).then((response) => {
            setProjeto(response.data);
        });
    }, [id]);

    return (
        <div className="projeto-view-card">
            <div className="projeto-card-options">
                    <Link to={"/projetos"} className="projeto-card-close">X</Link>
                {typeof projeto !== "undefined" && projeto.map((value) => {
                    return (<>
                        <div className="projeto-view-column">
                            <div className="selected-projeto-descricao">{value.DESCRICAO}</div>
                            <div className="selected-projeto-responsavel">(Responsável: {value.RESPONSAVEL_ID})</div>
                            <div className="selected-reuniao-status">Status: {parseProjectStatus(value.STATUS)}</div>

                        </div>
                    </>);
                })}
            </div>

            <button className="deletar-projeto-btn"
                onClick={(_) => {
                    Axios.delete(`http://localhost:3001/projeto/deletar/${id}`).then((response) => {

                    let data = response.data;

                    if (data.error) {
                        alert(`ERRO: ${data.error.sqlMessage}`);
                    } else {
                        alert(`Projeto [${id}] deletado com sucesso!`);
                        window.location.href = "http://localhost:3000/projetos";
                    }
                    });
                }}>DELETAR PROJETO</button>
        </div>
    );

    function parseProjectStatus(status) {
        switch(status) {
            case "EMPROGRESSO":
                return "EM PROGRESSO";
            case "CONCLUIDO":
                return "CONCLUÍDO";
            default:
                return "ABANDONADO";
        }
    }

}