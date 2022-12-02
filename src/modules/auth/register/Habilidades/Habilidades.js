import React, { useEffect, useState } from "react";
import CustomCheckBox from "../../../../utils/components/CustomCheckbox/CustomCheckBox";

import "./Habilidades.css";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Habilidades() {

    const [habilidades_soft, setHabilidadesSoft] = useState([]);
    const [habilidades_hard, setHabilidadesHard] = useState([]);

    const [pessoaLast, setPessoaLast] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/skills/SOFT").then((response) => {
            setHabilidadesSoft(response.data);
        });
    }, []);
    useEffect(() => {
        Axios.get("http://localhost:3001/skills/HARD").then((response) => {
            setHabilidadesHard(response.data);
        });
    }, []);
    
    useEffect(() => {
        Axios.get("http://localhost:3001/pessoa-last-registered").then((response) => {
            setPessoaLast(response.data);
        });
    }, []);

    function handleChangeBox(e, value) {
        if (e.target.checked) {
            Axios.post(`http://localhost:3001/membro/skill/adiciona/${value.SKILL_ID}/${pessoaLast[0].PESSOA_ID}`);
        }
        if (!e.target.checked) {
            Axios.delete(`http://localhost:3001/membro/skill/remove/${value.SKILL_ID}/${pessoaLast[0].PESSOA_ID}`);
        }
    }

    return(
        <>
            <div className="white-container">
                <div className="grid-row">
                    <div className="grid-row-hard">
                        <h3 className="habilidade-title-text">Habilidades (Hard Skills)</h3>
                        {typeof habilidades_soft != "undefined" && habilidades_soft.map((value) => {
                            return <CustomCheckBox habilidade={"" + value.NOME_SKILL} onChange={(e) => handleChangeBox(e, value)}/>;
                        })}
                    </div>
                    <div className="grid-row-soft">
                        <h3 className="habilidade-title-text">Habilidades (Soft Skills)</h3>
                        {typeof habilidades_hard != "undefined" && habilidades_hard.map((value) => {
                            return <CustomCheckBox habilidade={"" + value.NOME_SKILL} onChange={(e) => handleChangeBox(e, value)}/>;
                        })}
                </div>
                    </div>
                    <button>VOLTAR</button>
                    <button>
                        <Link to={"/membros"}>FINALIZAR CADASTRO</Link>
                    </button>
            </div>
        </>
    );
}