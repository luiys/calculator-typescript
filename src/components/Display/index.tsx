import React from 'react';
import { LegacyRef } from 'react';

import './../../styles/global.css'
import './style.css'

interface DisplayProps {
    value: string
    inputRef: LegacyRef<HTMLInputElement>
}

const Display: React.FC<DisplayProps> = props => {
    return <input type="text" defaultValue={props.value} ref={props.inputRef}/>
}

export default Display;