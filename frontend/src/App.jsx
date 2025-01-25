import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
