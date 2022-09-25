import { React, useRef, useEffect } from "react";

import CustomInput  from "./../../../utils/components/CustomInput/CustomInput";

import logo from "../../../assets/logo.png";

import { Link } from "react-router-dom";

import './Login.css';
import CustomButton from "../../../utils/components/CustomButton/CustomButton";

function Login() {

    
    let userInputText = useRef(null);
    function ValidateAuthAction() {

        useEffect(() => {
            const inputElement = userInputText.current;
            alert("Botão funcionando até aqui!");
            var authorized = false;
            // let userInputText = document.querySelector(".white-container > .input-column > .login-input-user > input").value;
            // let passwordInputText = document.querySelector("#login-input-password").querySelector("input").value;
    
    
            
            if (inputElement.value.length > 0) {
                authorized = true;
            }
    
            if (authorized) {
                return <Link to="/catalogo"/>;
            }
        });

    }

    return (
            <div className="white-container">
                <img src={logo} alt="RAS Logo" className="ras-logo"/>
                <div className="input-column">
                    <CustomInput ref={userInputText} className="login-input-user" type="text" placeholder="Usuário" maxLength={35}/>
                    <CustomInput id="login-input-password" type="password" placeholder="Senha" maxLength={20}/>
                </div>
                <CustomButton text="ENTRAR" onClick={ValidateAuthAction}/>
            </div>
            
        );
}

export default Login;