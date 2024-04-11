import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
    let arrayOfNum = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', 0, '/', '=', 'C']
    const [inputValue, setInputValue] = useState('')

    function display(ele, id) {
        let item = inputValue;
        let lastStringValue = (item.charAt(item.length - 1))
        console.log(lastStringValue);
        //'+' , '-' , '*' , '/' conditions check and data show according
        if (ele === '+' || ele === '-' || ele === '*' || ele === '/') {
            if (lastStringValue === '+') {
                if (ele === '-' || ele === '*' || ele === '/') {
                    let replac = inputValue.slice(0, (inputValue.length - 1)) + ele;
                    setInputValue(replac);
                }
            } else if (lastStringValue === '-') {
                if (ele === '+' || ele === '*' || ele === '/') {
                    let replac = inputValue.slice(0, (inputValue.length - 1)) + ele;
                    setInputValue(replac);
                }
            } else if (lastStringValue === '*') {
                if (ele === '-' || ele === '+' || ele === '/') {
                    let replac = inputValue.slice(0, (inputValue.length - 1)) + ele;
                    setInputValue(replac);
                } 
            } else if (lastStringValue === '/') {
                if (ele === '-' || ele === '+' || ele === '*') {
                    let replac = inputValue.slice(0, (inputValue.length - 1)) + ele;
                    setInputValue(replac);
                } 
            } else {
                setInputValue(inputValue + ele);
            }
        } else {
            setInputValue(inputValue + ele);
        }

        //'=' condition check and data show according
        if (ele === '=') {
            let result = eval(inputValue);
            setInputValue(result.toString());
        }

        //clear all input values
        if (ele === 'C') {
            setInputValue('');
        }
    }

    return (
        <>
            <div className='calculatorSection'>
                <div className='calculator'>
                    <div className='calTopSection'>
                        <input type="text" value={inputValue} />
                    </div>
                    <div className='calBottomSection'>
                        <div className='row'>
                            {arrayOfNum.map((e, index) => {
                                return <div className='col-md-3 column' key={index}>
                                    <button className='btn btn-primary' onClick={() => display(e, index)}>{e}</button>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
