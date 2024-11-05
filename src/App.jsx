
import { Fragment } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Search from './components/search/Search'
import Info from './components/info/Info'

function App() {


  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Search />
      <Info />
   
    </Fragment>
  )
}

export default App
