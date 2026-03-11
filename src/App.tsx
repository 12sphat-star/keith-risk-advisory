import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./styles/responsive-rebuild.css"

import Home from "./pages/Home"
import HealthInsurance from "./pages/HealthInsurance"
import LifeInsurance from "./pages/LifeInsurance"
import BusinessOwners from "./pages/BusinessOwners"
import About from "./pages/About"
import Resources from "./pages/Resources"
import Schedule from "./pages/Schedule"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route path="/business-owners" element={<BusinessOwners />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App