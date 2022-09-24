import { Link } from "react-router-dom";

let userInput = document.getElementById("login-input-user").getElementsByClassName("login-input");
let passwordInput = document.getElementById("login-input-password").getElementsByClassName("login-input");

function validateAuthAction() {
    var authorized = false;
    let userInputText = userInput.item("value").textContent;
    let passwordInputText = passwordInput.item("value").textContent;
    if (userInputText.length > 0 && (passwordInputText.length > 0)) {
        authorized = true;
    }
    return authorized;
}

function auth() {
    if (validateAuthAction()) {
        /// 1. Acessar [Oracle Database]
        /// 2. Buscar no banco o nome de usuário que foi digitado
        /// 3. Filtrar a [row] do usuário
        /// 4. Comparar (através de funções no próprio banco) a senha digitada com o campo [password] da [row] do usuário
        /// 5. Retornar o resultado da etapa 4 buscando filtrar para o JS o tipo de retorno da função no banco (boolean)
        /// 6. Se o retorno for {true} -> autoriza o login / caso false -> recusa o login
        return true;
    }
    return false;
}