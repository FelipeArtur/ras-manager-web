import React from "react";

import CustomInput  from "./../../../utils/components/CustomInput/CustomInput";

import logo from "../../../assets/logo.png";


import './Login.css';
import CustomButton from "../../../utils/components/CustomButton/CustomButton";

export default class Login extends React.Component {
    render() {
        return (
            <>
                <div className="white-container">
                    <img src={logo} alt="RAS Logo" className="ras-logo"/>
                    <div className="input-column">
                        <CustomInput className="login-input-user" type="text" placeholder="Usuário" maxLength={35}/>
                        <CustomInput id="login-input-password" type="password" placeholder="Senha" maxLength={20}/>
                    </div>
                    <CustomButton navTo="/catalogo" text="ENTRAR"/>
                </div> 
            </>
        );
    }
}