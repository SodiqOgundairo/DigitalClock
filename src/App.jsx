import { useState } from 'react'
import DigitalClock from './DigitalClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DigitalClock />
    <DigitalClock />
    <DigitalClock />
    <DigitalClock />
    <DigitalClock />
    <DigitalClock />
    </>
  )
}

export default App
