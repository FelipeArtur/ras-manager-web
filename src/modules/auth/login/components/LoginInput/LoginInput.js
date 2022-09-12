import React from 'react';

import './LoginInput.css';

class LoginInput extends React.Component {
    render() {
        return(
            <input className='login-input' 
            type={this.props.type}
            placeholder={this.props.placeholder}
            maxLength={this.props.maxLength}/>
        );
    }
}

export default LoginInput;