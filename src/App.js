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
          <Route path="/film-directory" element={<Home />} />
          <Route path="/film-directory/about" element={<About />} />
          <Route path="/film-directory/about/test" element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App

