import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Test from "./components/Test"

import "./style/landingPage.css"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/test" element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App

