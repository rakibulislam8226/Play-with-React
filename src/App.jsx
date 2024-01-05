import './App.css';
import { Achivement } from './Components/Achivements/Achivement';
import { Categories } from './Components/Categories/Categories';
import { Companies } from './Components/Companies';
import { Courses } from './Components/Courses/Courses';
import { Feedback } from './Components/Feedback/Feedback';
import { Footer } from './Components/Footer/Footer';
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
      <Feedback />
      <Footer />
    </>
  )
}

export default App
