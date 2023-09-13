import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobBoard from './Components/JobBoard'
import csv from './assets/data/job-data.csv'
import SingleJobPost from './Components/SingleJobPost';
import NavBar from './Components/NavBar';


function App() {
  const data = csv;

  const getDaysSinceJobPost = (datePublished) => {
    const oneDay = (24 * 60 * 60 * 1000);
    const today = new Date();
    const dayPublished = new Date(datePublished);
    const daysPassed = Math.round(Math.abs((today - dayPublished) / oneDay));
    return daysPassed
  }

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<JobBoard data={data} getDaysSinceJobPost={getDaysSinceJobPost} />}></Route>
        <Route path='jobs/:jobPath' element={<SingleJobPost data={data} getDaysSinceJobPost={getDaysSinceJobPost} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
