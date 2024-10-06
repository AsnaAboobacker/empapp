import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Addemp from './components/Addemp'
import View from './components/View'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Welcome REACT</h1>
      <Routes>
        <Route path="/add" element={<Addemp />} ></Route>
        <Route path="/view" element={<View />} ></Route>
        
      </Routes>
    </>
  )
}

export default App
