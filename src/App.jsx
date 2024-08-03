import About from "./components/About"
import Feature from "./components/Feature"
import Checkout from "./components/Checkout"
import Download from "./components/Download"
import HowToUse from "./components/HowToUse"
import Blog from "./components/Blog"
import BlogPage from "./components/pages/blog/BlogPage"
import BlogPageDetail from "./components/pages/blog/BlogPageDetail"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Feature />
            <Checkout />
            <Download />
            <HowToUse />
            <Blog />
            <Footer />
          </main>
        } />
        <Route path="blogpage/:id" element={<BlogPage />} />
        <Route path="blogpage/detail/:id" element={<BlogPageDetail />} />
      </Routes>
    </Router>
  )
}

export default App
