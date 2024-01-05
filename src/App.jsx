import './App.css';
import { Achivement } from './Components/Achivements/Achivement';
import { Categories } from './Components/Categories/Categories';
import { Companies } from './Components/Companies';
import { Courses } from './Components/Courses/Courses';
import { Hero } from './Components/Hero';
import { Navbar } from './Components/Navbar';



function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achivement />
      <Categories />
    </>
  )
}

export default App
