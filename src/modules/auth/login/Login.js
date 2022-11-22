import React, { useState } from "react";

import CustomInput  from "./../../../utils/components/CustomInput/CustomInput";
import Axios from 'axios';
import logo from "../../../assets/logo.png";


import './Login.css';
import CustomButton from "../../../utils/components/CustomButton/CustomButton";

export default function Login() {

    const [pessoas, setPessoas] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickBtn = () => {
        console.log("CLICOU");
        Axios.get("http://localhost:3001/pessoas").then((response) => {
            setPessoas(response.data);

        });
        let person = pessoas.filter((p) => {
            if (p.EMAIL === email) {
                return p;
            }
            return p;
        }).at(0);
        if (person.SENHA === password) {
            // NAVEGAR PRA PRÓXIMA PÁGINA
            console.log("FOI CARALHO");
        }
    }

    function handleChangeEmail(ev) {
        console.log(ev.target.value);
        setEmail(ev.target.value);
    }

    function handleChangePassword(ev) {
        console.log(ev.target.value);
        setPassword(ev.target.value);
    }

    return (
            <>
                <div className="white-container">
                    <img src={logo} alt="RAS Logo" className="ras-logo"/>
                    <div className="input-column">
                        <CustomInput 
                        id="login-input-user" 
                        type="text" 
                        placeholder="Usuário" 
                        maxLength={35}
                        onChange={(e) => handleChangeEmail(e)}
                        />
                        <CustomInput 
                        id="login-input-password" 
                        type="password" 
                        placeholder="Senha" 
                        maxLength={20}
                        onChange={(e) => handleChangePassword(e)}
                        />
                    </div>
                    <CustomButton 
                    onClick={()=> handleClickBtn}
                    navTo="/catalogo" 
                    text="ENTRAR"
                    />
                </div> 
            </>
        );
}