import React from 'react';

import './../../styles/global.css'
import './style.css'

interface ButtonProps {
    value: String,
    onClickButton: Function
}

const Button: React.FC<ButtonProps> = ({value, onClickButton}) => {
    return <button onClick={() => onClickButton(value)} >{value}</button>
}

export default Button;