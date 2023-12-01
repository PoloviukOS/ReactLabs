import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      switch (operation) {
        case '+':
          setResult(number1 + number2);
          break;
        case '-':
          setResult(number1 - number2);
          break;
        case '*':
          setResult(number1 * number2);
          break;
        case '/':
          setResult(number1 / number2);
          break;
        default:
          setResult('Invalid operation');
      }
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className='inputBox'>
        <input type="number" step="any" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter the first change" />
        <input type="number" step="any" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter the second change" />
      </div>
      <div className='buttonBox'>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button onClick={calculate}>Calculate</button>
      </div>
      <div className='resultBox'>
        <input type="text" value={result} readOnly placeholder="Result" />
      </div>
    </div>
  );
}

export default App;