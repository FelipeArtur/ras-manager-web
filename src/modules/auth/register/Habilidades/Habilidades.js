import React from "react";
import CustomCheckBox from "../../../../utils/components/CustomCheckbox/CustomCheckBox";
import CustomButton from "../../../../utils/components/CustomButton/CustomButton";

import "./Habilidades.css";

export default class Habilidades extends React.Component {
    render() {
        return(
            <>
                <div className="white-container">
                    <div className="grid-row">
                        <div className="grid-row-hard">
                            <h3 className="habilidade-title-text">Habilidades (Hard Skills)</h3>
                            <CustomCheckBox habilidade="Programação"/>
                            <CustomCheckBox habilidade="CAD"/>
                            <CustomCheckBox habilidade="Linux"/>
                            <CustomCheckBox habilidade="Sistemas Embarcados"/>
                            <CustomCheckBox habilidade="Impressão 3D"/>
                            <CustomCheckBox habilidade="Escrita de artigos"/>
                        </div>
                        <div className="grid-row-soft">
                            <h3 className="habilidade-title-text">Habilidades (Soft Skills)</h3>
                            <CustomCheckBox habilidade="Liderança"/>
                            <CustomCheckBox habilidade="Organização"/>
                            <CustomCheckBox habilidade="Resiliência"/>
                            <CustomCheckBox habilidade="Comunicação assertiva"/>
                            <CustomCheckBox habilidade="Flexibilidade"/>
                            <CustomCheckBox habilidade="Trabalho em grupo"/>
                    </div>
                        </div>
                        <CustomButton text="Cadastrar" navTo="/"/>
                </div>
            </>
        );
    }
}