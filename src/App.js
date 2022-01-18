import React, { useState, useEffect, useRef } from 'react';
import './App.css';
function App() {
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }
  function backSpace() {
    setResult(result.slice(0, result.length - 1)); //0,-1
  }
  function clear() {
    setResult('');
  }
  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('ERROR');
    }
  }
  return (
    <>
      <div className='calc-app'>
        <div id='heading'>Calculator</div>
        <form>
          <input type='text' value={result} ref={inputRef} />
        </form>
        <div className='keypad'>
          <button id='clear' onClick={clear}>
            AC
          </button>
          <button id='backspace' onClick={backSpace}>
            DEL
          </button>
          <button name='+' onClick={handleClick}>
            +
          </button>
          <button name='7' onClick={handleClick}>
            7
          </button>
          <button name='8' onClick={handleClick}>
            8
          </button>
          <button name='9' onClick={handleClick}>
            9
          </button>
          <button name='-' onClick={handleClick}>
            -
          </button>
          <button name='4' onClick={handleClick}>
            4
          </button>
          <button name='5' onClick={handleClick}>
            5
          </button>
          <button name='6' onClick={handleClick}>
            6
          </button>
          <button name='*' onClick={handleClick}>
            *
          </button>
          <button name='1' onClick={handleClick}>
            1
          </button>
          <button name='2' onClick={handleClick}>
            2
          </button>
          <button name='3' onClick={handleClick}>
            3
          </button>
          <button name='/' onClick={handleClick}>
            /
          </button>
          <button name='0' onClick={handleClick}>
            0
          </button>
          <button name='.' onClick={handleClick}>
            .
          </button>
          <button id='result' onClick={calculate}>
            RESULT
          </button>
        </div>
      </div>
      <footer>
        <ul class='footer-links'>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>Disclaimer</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
// "homepage": "https://shubhankar-mern.github.io/codingNinjaMernCalculator",
  //"predeploy": "npm run build",
   // "deploy": "gh-pages -d build",