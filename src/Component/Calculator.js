import './Calculator.css'
import { useState } from 'react'
export const Calculator = () =>{
    const [input, setInput] = useState('')

    const handleClick = (value) =>{
        setInput((prev)=> prev + value)
    }
    const handleClear = (value) =>{
        setInput((''))
    }
    const handleEqual  = () =>{
        try{
            setInput(eval(input).toString())
        }catch (error){
            setInput('Error')
        }
    }

    return(
        <div>
            <h3>Use Me For Calculations</h3>
            <div className="calculator">
                <div className="display">{input || '0'}</div>
                <button className='clear-button' onClick={handleClear}>C</button>
                <div className="buttons">
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('*')}>*</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={() => handleClick('.')}>.</button>
                    <button onClick={() => handleEqual()}>=</button>
                    <button onClick={() => handleClick('/')}>/</button>
                </div>
            </div>
        </div>
    )
}