import React, {useState} from 'react'
import Button from './Button';


function Calculator(props) {
    const [final, setFinal] = useState(''); 
    const [operator, setOperator] = useState(null);
    const [operand, setOperand] = useState(null);
    const [input, setInput] = useState([]);


    function handleClick(value) {
        setFinal((prevFinal) => prevFinal + value.toString());
        setInput([...input,value]);    
    }

    function handleComputation() {
        setInput([...input,'=']);    

        if (operand !== null && operator !== null) {
            let result;
            console.log(final)
            const currentValue = parseFloat(final);
            console.log(operator)
            switch (operator) {
                case '+':
                    result = operand + currentValue;
                    break;
                case '-':
                    result = operand - currentValue;
                    break;
                case '*':
                    result = operand * currentValue;
                    break;
                case '/':
                    result = operand / currentValue;
                    break;
                default:
                    result = currentValue;
            }
            setInput([...input,result]);    
            setFinal(result.toString());
            setOperand(null);
            setOperator(null);
            setFinal(null);
        }
    }

    // Handle operator click
    function handleOperator(selectedOperator) {
        if (final === '') return; 
        if (operand === null) {
            setOperand(parseFloat(final));
        } else {
            handleComputation(); 
        }
        setOperator(selectedOperator);
        setFinal(''); 
        setInput([...input,selectedOperator]);    

    }

    // Handle clear click
    function handleClear() {
        setOperand(null);
        setOperator(null);
        setFinal('');
        setInput(null);

    }

    return (
        <React.Fragment>
            <div className="calculator">
                <input type="text" value={final} /> <p>{input}</p>
                <div className="row1">
                    <Button label="1" class="digit" click={() => handleClick(1)} />
                    <Button label="2" class="digit" click={() => handleClick(2)} />
                    <Button label="3" class="digit" click={() => handleClick(3)} />
                    <Button label="+" class="math" click={() => handleOperator('+')} />
                </div>
                <div className="row2">
                    <Button label="4" class="digit" click={() => handleClick(4)} />
                    <Button label="5" class="digit" click={() => handleClick(5)} />
                    <Button label="6" class="digit" click={() => handleClick(6)} />
                    <Button label="-" class="math" click={() => handleOperator('-')} />
                </div>
                <div className="row3">
                    <Button label="7" class="digit" click={() => handleClick(7)} />
                    <Button label="8" class="digit" click={() => handleClick(8)} />
                    <Button label="9" class="digit" click={() => handleClick(9)} />
                    <Button label="/" class="math" click={() => handleOperator('/')} />
                </div>
                <div className="row4">
                    <Button label="0" class="digit" click={() => handleClick(0)} />
                    <Button label="*" class="math" click={() => handleOperator('*')} />
                    <Button label="=" class="green" click={handleComputation} />
                </div>
                <div className="row5">
                    <Button label="Clear" class="clear" click={handleClear} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
