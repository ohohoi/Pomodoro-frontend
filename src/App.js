import { Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './presentational/Footer/Footer'
import Header from './presentational/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ About }/>
      <Footer/>
    </div>
  )
}

export default App
