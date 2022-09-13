import React from "react";
import './LoginButton.css';

import { Link } from 'react-router-dom';

class LoginButton extends React.Component {
    render() {
        return(
            <button className="login-btn">
                <Link to="/eventos" className="login-btn-text">ENTRAR</Link>
            </button>
        );
    }
}

export default LoginButton;