
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import NavBar from './components/layout/Header/NavBar'
import ContactBar from './components/layout/Header/ContactBar'
import Footer from './components/layout/Footer'




function App() {


  return (
    <BrowserRouter>
          {/* <ContactBar /> */}
            <NavBar />

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='*' element={<h1>Not found</h1>} />
      </Routes>
      <Footer />
      {/* <div className='h-96 bg-orange-400'></div> */}
    </BrowserRouter>
  )
}

export default App
