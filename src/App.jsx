import Tester from "./Components/Tester"
import Index from './Components/Index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stopwatch from './Components/Stopwatch'


function App() {

  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Tester' element={<Tester />} />
          <Route path='/StopWatch' element={<Stopwatch />} />

        </Routes>
      </>
    </Router>
  )

}

export default App
