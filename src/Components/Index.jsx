import React from 'react'
import { Link } from 'react-router-dom';
import './Index.css'

const Index = () => {
  return (
    <div className="main">
      <div className="link">
        <Link to='/Stopwatch'>StopWatch</Link>
        <Link to='/Tester'>Keyboard Speed Tester</Link>
      </div>
    </div>
  )
}

export default Index
