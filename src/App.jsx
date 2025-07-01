import { useState } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'

function App() {
  const [travelMode, setTravelMode] = useState("Gas-Powered Car")
  const [distance, setDistance] = useState("")
  const [error, setError] = useState(null)
  const [originLat, setOriginLat] = useState("")
  const [originLong, setOriginLong] = useState("")
  const [destinationLat, setDestinationLat] = useState("")
  const [destinationLong, setDestinationLong] = useState("")


  return (
    <>
      <Header />
      <Form travelMode={travelMode}
      setTravelMode={setTravelMode}
      distance={distance}
      setDistance={setDistance}
      error={error}
      setError={setError}
      originLat={originLat}
      originLong={originLong}
      destinationLat={destinationLat}
      destinationLong={destinationLong}
      setOriginLat={setOriginLat}
      setOriginLong={setOriginLong}
      setDestinationLong={setDestinationLong}
      setDestinationLat={setDestinationLat}
      />
    </>
  )
}

export default App
