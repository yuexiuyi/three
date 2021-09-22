import React, { useState } from 'react'
import Three from './demo2/Three';
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Three/>
    </div>
  )
}

export default App
