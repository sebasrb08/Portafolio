import { About } from './component/about'
import { Contact } from './component/Contact'
import { Hero } from './component/Hero'
import { Navbar } from './component/Navbar'
import { Project } from './component/Projects'
import './style/App.css'

function App() {

  return (
    <>
    <div className="container ">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
    </>
  )
}

export default App
