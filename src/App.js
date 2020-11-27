import './App.css'
import BtnCarrier from './container/BtnContainer/BtnContainer'
import ClockCarrier from './container/ClockContainer/ClockContainer'
import Footer from './presentational/Footer/Footer'
import Header from './presentational/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <ClockCarrier/>
      <BtnCarrier/>
      <Footer/>
    </div>
  )
}

export default App
