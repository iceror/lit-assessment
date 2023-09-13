import { useEffect, useState } from "react"
import JobList from "./JobList"
import NavBar from "./NavBar"


const JobBoard = ({ data }) => {
  const [jobs, setJobs] = useState([]);
  const [functionalArea, setFunctionalArea] = useState('');
  const [seniority, setSeniority] = useState('');
  const [perks, setPerks] = useState('');
  const [location, setLocation] = useState('');

  const handleFunctionAreaChange = (event) => {
    setFunctionalArea(event.target.value)
  }

  const handleSeniorityInputChange = (event) => {
    setSeniority(event.target.value)
  }

  const handlePerksInputChange = (event) => {
    setPerks(event.target.value)
  }

  const handleLocationInputChange = (event) => {
    setLocation(event.target.value)
  }

  const filtered = data.filter(job => {
    return (
      (functionalArea === '' || job['Functional Area'].toLowerCase().includes(functionalArea.toLowerCase())) &&
      (seniority === '' || job['Seniority'].toLowerCase().includes(seniority.toLowerCase())) &&
      (perks === '' || job['Perks (coming soon)'].toLowerCase().includes(perks.toLowerCase())) &&
      (location === '' || job['Location Full'].toLowerCase().includes(location.toLowerCase()))
    );
  });

  useEffect(() => {
    setJobs(filtered)
  }, [functionalArea, seniority, perks, location])
  // console.log(jobs);

  return (
    <>
      <NavBar />
      <main>
        <div className="filters">
          <h3>Search by filters</h3>
          <div>
            <input type="text" placeholder="Functional Area" onChange={handleFunctionAreaChange} />
            <input type="text" placeholder="Seniority" onChange={handleSeniorityInputChange} />
            <input type="text" placeholder="Perks" onChange={handlePerksInputChange} />
            <input type="text" placeholder="Location" onChange={handleLocationInputChange} />
          </div>
        </div>
        <hr />
        <div className="search">
          <div className="search-input">
            <h3>Search by keywords</h3>
            <input type="text" placeholder="Keywords" />
          </div>
          <div className="order-by">
            <h3>Order by:</h3>
            <button>Recent</button>
            <button>Companies A-Z</button>
          </div>
        </div>
        <JobList data={jobs} />
      </main>
    </>
  )
}

export default JobBoard
