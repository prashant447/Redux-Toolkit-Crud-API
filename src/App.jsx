import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

const App = () => {
  return (
    <>

    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route exact path='/'  element={<Create/>}/>
      <Route exact path='/read'  element={<Read/>}/>
      <Route exact path='/update/:id'  element={<Update/>}/>
    </Routes>
   
    
    </BrowserRouter>
    
    </>
  )
}

export default App
