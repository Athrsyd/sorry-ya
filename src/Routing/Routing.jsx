import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from '../components/Landing/Landing.jsx'
import Kofirm from '../components/Konfirm/Kofirm.jsx'
import Accordion from '../components/Accordion/Accordion.jsx'

const Rute = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/accordion' element={<Accordion />} />
      <Route path='/konfirm' element={<Kofirm />} />
    </Routes>
  )
}

export default Rute