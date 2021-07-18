import React, {useState, useRef} from 'react';
import Button from '../../components/Button';
import Display from '../../components/Display';
import {write} from './../../Functions/DisplayFunctions'
import tsIcon from './../../assets/typescriptIcon.png'

import './../../styles/global.css'
import './style.css'

const Calculator: React.FC = () => {

    const [displayValue, setDisplayValue] = useState("")
    const displayRef = useRef<HTMLInputElement>(null)
    const sinais = ["+", "-", "X", "/"]

    const handleOnPress = (value:string) => {
        if(value === "=" && displayRef.current){
            /* eslint no-eval: 0 */
            let ultimoCaractereIndex = displayRef.current.value.length - 1
            let ultimoCaractere = displayRef.current.value[ultimoCaractereIndex]
            let evalResponse = sinais.includes(ultimoCaractere) ? alert("O ultimo caractere nao pode ser um sinal") : eval(displayRef.current.value.replace("X", "*"))
            return evalResponse !== undefined ? setDisplayValue(evalResponse) :  setDisplayValue(displayRef.current.value)
        }
        if(value === "C"){
            return setDisplayValue("")
        }
        displayRef.current && setDisplayValue(write(displayRef.current.value, value))
    }

    return (
        <div className="wrapper">
            <div className="content">
                <header>
                    <h1>TypeScript Calculator</h1>
                    <img src = {tsIcon} alt="" />
                </header>
                
                <main>
                    <div className="display">
                        <Display value = {displayValue} inputRef = {displayRef}/>
                    </div>

                    <div className="buttons">
                        <div className="button-row">
                            <Button value="1" onClickButton={handleOnPress} />
                            <Button value="2" onClickButton={handleOnPress} />
                            <Button value="3" onClickButton={handleOnPress} />
                            <Button value="C" onClickButton={handleOnPress} />
                        </div>
                        <div className="button-row">
                            <Button value="4" onClickButton={handleOnPress} />
                            <Button value="5" onClickButton={handleOnPress} />
                            <Button value="6" onClickButton={handleOnPress} />
                            <Button value="+" onClickButton={handleOnPress} />
                        </div>
                        <div className="button-row">
                            <Button value="7" onClickButton={handleOnPress} />
                            <Button value="8" onClickButton={handleOnPress} />
                            <Button value="9" onClickButton={handleOnPress} />
                            <Button value="-" onClickButton={handleOnPress} />
                        </div>
                        <div className="button-row">
                            <Button value="0" onClickButton={handleOnPress} />
                            <Button value="/" onClickButton={handleOnPress} />
                            <Button value="X" onClickButton={handleOnPress} />
                            <Button value="=" onClickButton={handleOnPress} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Calculator;