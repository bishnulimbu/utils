import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Tester.css';
import { useNavigate } from 'react-router-dom';

const paragraph = "Yes, it's essential to include a / route in your React Router setup if you want to handle the root path of your application. Without a route for /, React Router cannot determine what component to render when the user visits the root URL of your app, leading to the No routes matched location /  error.";

const Tester = () => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [time, setTime] = useState('');
  const navigate = useNavigate();
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef();
  const charRef = useRef([]);

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  const handleChar = (e) => {
    const characters = charRef.current;
    let currChar = charRef.current[charIndex];// will give the current typing character index
    let typedChar = e.target.value.slice(-1); //will take the last character typed.
    if (typedChar === currChar.textContent) {
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
              <span key={index} className={`char ${index === charIndex ? "active" : ""}`} ref={(e) => charRef.current[index] = e}>
                {char}
              </span>
            )
          })
        }</p>
      {/* <p className='text-body'>{time}</p> */}
    </div>
  )
}

export default Tester
