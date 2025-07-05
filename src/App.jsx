import { useState } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results.jsx'

function App() {
  const [travelMode, setTravelMode] = useState("Gas-Powered Car")
  const [distance, setDistance] = useState("")
  const [error, setError] = useState(null)
  const [units, setUnits] = useState("mi")
  const [departAirport, setDepartAirport] = useState("")
  const [arrivalAirport, setArrivalAirport] = useState("")

  const [carbonResult, setCarbonResult] = useState("")
  const [flightDistance, setFlightDistance] = useState("");

  const [resultShown, setResultShown] = useState(false);
  
  return (
    <>
      <Header />
      <Form travelMode={travelMode}
      setTravelMode={setTravelMode}
      distance={distance}
      setDistance={setDistance}
      error={error}
      setError={setError}
      units={units}
      setUnits={setUnits}
      departAirport={departAirport}
      setDepartAirport={setDepartAirport}
      arrivalAirport={arrivalAirport}
      setArrivalAirport={setArrivalAirport}
      flightDistance={flightDistance}
      setFlightDistance={setFlightDistance}
      carbonResult={carbonResult}
      setCarbonResult={setCarbonResult}
      setResultShown={setResultShown}
      />
      <Results resultShown={resultShown}
      travelMode={travelMode}
      flightDistance={flightDistance}
      units={units}
      carbonResult={carbonResult}/>
    </>
  )
}

export default App
