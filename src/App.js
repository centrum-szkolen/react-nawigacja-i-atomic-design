import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ButtonsPage from './components/pages/ButtonsPage'
import DetailsPage from './components/pages/DetailsPage'
import HeadingPage from './components/pages/HeadingPage'
import HomePage from './components/pages/HomePage'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<HomePage/>}/>
                 <Route path="/przyciski" element={<ButtonsPage/>}/>
                 <Route path="/tytuly" element={<HeadingPage/>}/>
                 <Route path="/book/:category/:title" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App