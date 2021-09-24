import React, { useState } from 'react'
import Line from './demo/Line.jsx';
import Text from './demo/Text.jsx';
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Line/> */}
      <Text/>
    </div>
  )
}

export default App
