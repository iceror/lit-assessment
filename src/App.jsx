import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobBoard from './Components/JobBoard'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JobBoard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
