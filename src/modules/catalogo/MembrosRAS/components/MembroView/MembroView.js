import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



import "./MembroView.css";

export default function MembroView() {

    const {id} = useParams();

    const [pessoa, setPessoa] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/pessoa/" + id).then((response) => {
            setPessoa(response.data);
        });
    }, [id]);

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
                                    Ingressou no curso em {sqlToJsDate(value.DT_INGRESSO_CURSO)}
                                </div>
                            </div>

                            <div className="selected-member-in-project-row">
                                <div className="selected-member-data-entered-ras">
                                    Ingressou no RAS em {sqlToJsDate(value.DT_INGRESSO_RAS)}
                                </div>
                            </div>

                        </div>
                    </>);
                })}
            </div>
        </div>
    );

    function parseMes(mes) {

        const translateMes = {
            "jan": "janeiro",
            "feb": "fevereiro",
            "mar": "março",
            "apr": "abril",
            "may": "maio",
            "jun": "junho",
            "jul": "julho",
            "aug": "agosto",
            "sep": "setembro",
            "oct": "outubro",
            "nov": "novembro",
            "dec": "dezembro",
        }

        let entries = Object.entries(translateMes);
        
        let meses = entries.filter(([key, value]) => {
            return key.toLowerCase() === mes.toLowerCase() ? value : "";
        }).at(0)[1];

        return meses;
    }

    function sqlToJsDate(sqlDate){
        let dateTime = sqlDate.replace("T", " ").replace("Z", "");

        let dateTimeParts= dateTime.split(/[- :]/);
        dateTimeParts[1]--;

        let dateStr = new Date(...dateTimeParts).toString();

        return formatDataBR(formatDate(dateStr));
    }

    function formatDate(date) {
        const dateSplit = date.split("03:00:00 GMT");

        let justDate = dateSplit[0];

        return justDate;
    }

    function formatDataBR(data) {
        const dataSep = data.split(" ");
        let mes = dataSep[1];
        let dia = dataSep[2];
        let ano = dataSep[3];

        return dia + " de " + parseMes(mes) + " de " + ano;
    }

}