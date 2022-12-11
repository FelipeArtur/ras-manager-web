import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./MembroHabilidades.css";

export default function MembroHabilidades() {
    const {id} = useParams();

    const [skills, setSkills] = useState([]);

    const [soft, setSoft] = useState([]);
    const [hard, setHard] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/membro-skill/${id}`).then((response) => {

            let data = response.data;
            
            if (data.error) {
                alert(`ERRO: ${data.error.sqlMessage}`);
            }
            
            setSkills(response.data);
            
            setSoft(skills.filter((value) => value.TIPO_SKILL === "SOFT"));
            setHard(skills.filter((value) => value.TIPO_SKILL === "HARD"));
        });
    }, [id, skills]);

    return (
        <div className="membro-skills-view-card">        
            <div className="membro-skills-card-options">
                    <Link to={`/membro/${id}`} className="membro-skills-card-back">{"<"}</Link>
                    <div className="member-skill-type-title">{">>> SOFT <<<"}</div>
                {typeof soft !== "undefined" && soft.map((value) => {
                    return (<>
                        <div className="member-skills-view-column">
                            {
                                soft.length > 0 ? <div className="selected-member-skill-name">{value.NOME_SKILL}</div> : <>{"Nada"}</>
                            }
                        </div>
                    </>);
                })}
                <div className="member-skill-type-title">{">>> HARD <<< "}</div>
                {typeof hard !== "undefined" && hard.map((value) => {
                    return (<>
                        <div className="member-skills-view-column">
                            {
                                hard.length > 0 ? <div className="selected-member-skill-name">{value.NOME_SKILL}</div> : <>{"Nada"}</>
                            }
                        </div>
                    </>);
                })}
            </div>
        </div>
    );
}