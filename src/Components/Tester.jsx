import React from 'react'
import { useState, useEffect } from 'react';
import './Tester.css';
import { useNavigate } from 'react-router-dom';

const Tester = () => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setText("Yes, it's essential to include a / route in your React Router setup if you want to handle the root path of your application. Without a route for /, React Router cannot determine what component to render when the user visits the root URL of your app, leading to the No routes matched location /  error.");
    setTime(60);
  }, []);
  //contribute1
  // useEffect(() => {
  //   setInterval(() => {
  //     if (time > 0) {
  //       return setTime(prevTime => { return prevTime - 1 });
  //     }
  //   }, 1000)
  // }, [])

  return (
    <div className='main-body'>
      <h1 className='title'>Tester</h1>
      <p className='text-body'>{text}</p>
      <p className='text-body'>{time}</p>
    </div>
  )
}

export default Tester
