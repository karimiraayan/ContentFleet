//import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
//import viteLogo from '/vite.svg'
import './style/main.scss'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
