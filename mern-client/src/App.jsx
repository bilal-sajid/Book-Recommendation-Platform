// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import FooterComp from './components/FooterComp'

import { Analytics } from '@vercel/analytics/react';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

    <div className='min-h-screen'>
      <Analytics />
      <Outlet/>
    </div>
    
    <FooterComp/>
    </>
  )
}

export default App
