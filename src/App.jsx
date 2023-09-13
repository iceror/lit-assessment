import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobBoard from './Components/JobBoard'
import csv from './assets/data/job-data.csv'
import SingleJobPost from './Components/SingleJobPost';
import NavBar from './Components/NavBar';


function App() {
  const data = csv;

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<JobBoard data={data} />}></Route>
        <Route path='jobs/:jobPath' element={<SingleJobPost data={data}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
