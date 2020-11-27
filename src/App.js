import './App.css'
import BtnCarrier from './container/BtnContainer/BtnContainer'
import ClockCarrier from './container/ClockContainer/ClockContainer'
import Footer from './presentational/Footer/Footer'

function App() {
  return (
    <div className="App">
      <ClockCarrier/>
      <BtnCarrier/>
      <Footer/>
    </div>
  )
}

export default App
