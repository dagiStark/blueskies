
import { Fragment } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Search from './components/search/Search'
import Info from './components/info/Info'
import Lounge from './components/lounge/Lounge'
import Support from './components/support/Support'
import Travelers from './components/travelers/Travelers'

function App() {


  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Search />
      <Info />
      <Support />
      <Lounge />
      <Travelers />
    </Fragment>
  )
}

export default App
