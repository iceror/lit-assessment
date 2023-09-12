import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobBoard from './Components/JobBoard'
import csv from './assets/data/job-data.csv'


function App() {
  const data = csv;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JobBoard data={data} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
