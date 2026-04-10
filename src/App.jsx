import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import BrowsingPets from './browsingpets'
import Notfound from './notfound'
import Info from './info'

const App = () => {
  return (
    <div className="Card">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />

        <Route path='/browsingpets' element={<BrowsingPets />} />
        <Route path='/browsingpets/info/:slug' element={<Info />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App