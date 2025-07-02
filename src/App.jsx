import { useState } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results.jsx'

function App() {
  const [travelMode, setTravelMode] = useState("Gas-Powered Car")
  const [distance, setDistance] = useState("")
  const [error, setError] = useState(null)
  

  return (
    <>
      <Header />
      <Form travelMode={travelMode}
      setTravelMode={setTravelMode}
      distance={distance}
      setDistance={setDistance}
      error={error}
      setError={setError}
      />
      <Results />
    </>
  )
}

export default App
