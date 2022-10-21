import React, { useState } from "react";

import CustomInput  from "./../../../utils/components/CustomInput/CustomInput";

import logo from "../../../assets/logo.png";


import './Login.css';
import CustomButton from "../../../utils/components/CustomButton/CustomButton";

export default function Login() {

    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.user]: value.target.value,
            [value.target.password]: value.target.password,
        }));
    }

    const handleClickBtn = () => {
        console.log(values);
    }

    return (
            <>
                <div className="white-container">
                    <img src={logo} alt="RAS Logo" className="ras-logo"/>
                    <div className="input-column">
                        <CustomInput 
                        className="login-input-user" 
                        type="text" 
                        placeholder="Usuário" 
                        maxLength={35}
                        onChange={handleChangeValues}
                        />
                        <CustomInput 
                        id="login-input-password" 
                        type="password" 
                        placeholder="Senha" 
                        maxLength={20}
                        onChange={handleChangeValues}
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