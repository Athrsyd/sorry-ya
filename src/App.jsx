import { useState } from 'react'
import Rute from '../src/Routing/Routing.jsx'
import ScrollToTop from './components/ScrollToUp/SCT.jsx'
import { Analytics } from '@vercel/analytics/react';



function App() {

  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Rute />
    </>
  )
}

export default App
