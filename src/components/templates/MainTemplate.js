import React from 'react'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const MainTemplate = ({children}) => {
  return (
    <div>
         <Header/>
         {children}
         <Footer/>
    </div>
  )
}

export default MainTemplate