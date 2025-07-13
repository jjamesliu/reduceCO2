import { useState, useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

import { getCarbonAdvice } from '../carbonAdvice.js'

function App() {
  const [travelMode, setTravelMode] = useState("Gas-Powered Car")
  const [distance, setDistance] = useState("")
  const [error, setError] = useState(null)
  const [units, setUnits] = useState("mi")
  const [departAirport, setDepartAirport] = useState("")
  const [arrivalAirport, setArrivalAirport] = useState("")

  const [carbonResult, setCarbonResult] = useState("")
  const [flightDistance, setFlightDistance] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [resultShown, setResultShown] = useState(false);
  const resultsRef = useRef(null);

  useEffect(() => {
  if (resultShown && resultsRef.current) {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  }, [resultShown]);


  const [advice, setAdvice] = useState("");
  const adviceRef = useRef(null);

  useEffect(() => {
  if (advice && adviceRef.current) {
    adviceRef.current.scrollIntoView({behavior:'smooth'});
  }
  }, [advice])


  async function handleCarbonAdvice() {
        try {
            const response = await getCarbonAdvice(travelMode);
            setAdvice(response);
        } catch {
            console.log("Error. Please try again later");
        } finally {
           setIsLoading(false);
        }
    }

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
      handleCarbonAdvice={handleCarbonAdvice}
      advice={advice}
      setAdvice={setAdvice}
      setIsLoading={setIsLoading}
      />

      {isLoading && <LoadingScreen />}

      <Results resultShown={resultShown}
      travelMode={travelMode}
      flightDistance={flightDistance}
      units={units}
      carbonResult={carbonResult}
      advice={advice}
      resultsRef={resultsRef}
      adviceRef={adviceRef}/>
      
    </>
  )
}

export default App
