import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Tester.css';

const paragraph = "Yes, it's essential to include a / route in your React Router setup if you want to handle the root path of your application. Without a route for /, React Router cannot determine what component to render when the user visits the root URL of your app, leading to the No routes matched location /  error.";

const Tester = () => {
  const [charStates, setCharStates] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef();
  const charRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
    setCharStates(new Array(paragraph.length).fill(null)); // Initialize state
  }, [])

  const handleChar = (e) => {
    const characters = charRef.current;
    // let currChar = charRef.current[charIndex];// will give the current typing character index
    let currChar = paragraph[charIndex];
    let updatedStates = [...charStates];
    let typedChar = e.target.value;

    if (typedChar.length < charIndex) {
      // Backspace logic
      updatedStates[charIndex - 1] = null; // Reset the last character state
      setCharStates(updatedStates);
      setCharIndex(charIndex - 1);
    } else {
      let typedChar = e.target.value.slice(-1); //will take the last character typed.
      if (typedChar === paragraph[charIndex]) {
        updatedStates[charIndex] = 'success';
      } else {
        updatedStates[charIndex] = 'error';
      }
      setCharStates(updatedStates);
      setCharIndex(charIndex + 1);
    }
  }

  return (
    <div className='main-body'>
      <h1 className='title'>Tester</h1>
      <p className='text-body'>
        <input type='text' className='txt-input' ref={inputRef} onChange={handleChar} />
        {
          paragraph.split("").map((char, index) => {
            return (
              <span key={index} className={`char ${index === charIndex
                ? "active"
                : charStates[index] === 'success'
                  ? "success"
                  : charStates[index] === 'error'
                    ? "error"
                    : ""
                }`} ref={(e) => charRef.current[index] = e}>
                {char}
              </span>
            )
          })
        }</p>
    </div>
  )
}

export default Tester
