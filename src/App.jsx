import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobBoard from './Components/JobBoard'
import csv from './assets/data/job-data-id.csv'
import SingleJobPost from './Components/SingleJobPost';
import NavBar from './Components/NavBar';
import { getDaysSinceJobPost } from './js/data-utils';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<JobBoard data={csv} getDaysSinceJobPost={getDaysSinceJobPost} />}></Route>
        <Route path='jobs/:jobPath' element={<SingleJobPost data={csv} getDaysSinceJobPost={getDaysSinceJobPost} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
