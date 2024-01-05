import './App.css'
import { Companies } from './Components/Companies'
import { Courses } from './Components/Courses'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
    </>
  )
}

export default App
