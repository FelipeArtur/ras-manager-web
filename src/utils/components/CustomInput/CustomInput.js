import React from 'react';

import './CustomInput.css';

class CustomInput extends React.Component {
    render() {
        return(
            <input className='custom-input'
            type={this.props.type}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            maxLength={this.props.maxLength}/>
        );
    }
}

export default CustomInput;