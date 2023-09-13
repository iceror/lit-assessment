import { useEffect, useState } from "react"
import JobList from "./JobList"

const JobBoard = ({ data, getDaysSinceJobPost }) => {
  const [jobs, setJobs] = useState([]);
  const [functionalArea, setFunctionalArea] = useState('');
  const [seniority, setSeniority] = useState('');
  const [perks, setPerks] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');

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

  const handleKeyword = (event) => {
    setKeyword(event.target.value)
    // filterWithKeyword(keyword, data)
  }

  const filterWithInputs = () => {
    const filteredJobs = data.filter(job => {
      return ((functionalArea === '' || job['Functional Area'].toLowerCase().includes(functionalArea.toLowerCase())) &&
        (seniority === '' || job['Seniority'].toLowerCase().includes(seniority.toLowerCase())) &&
        (perks === '' || job['Perks (coming soon)'].toLowerCase().includes(perks.toLowerCase())) &&
        (location === '' || job['Location Full'].toLowerCase().includes(location.toLowerCase())))
    })
    // console.log(filteredJobs);
    setJobs(filteredJobs)
  };

  const filterWithKeyword = (keyword, data) => {
    const keywordExistsInJob = data.map((job) => {
      const jobValues = Object.values(job);
      return jobValues.some((value) => value.toLowerCase().includes(keyword.toLowerCase()))
    })
    const filteredJobs = data.filter((_, index) => keywordExistsInJob[index]);
    // console.log(filteredJobs);
    setJobs(filteredJobs)
  }

  useEffect(() => {
    filterWithInputs()
  }, [functionalArea, seniority, perks, location])

  useEffect(() => {
    filterWithKeyword(keyword, data)
  }, [keyword])
  // console.log(jobs);

  const showRecent = () => {
    const dateArray = [];
    data.forEach((job, index) => {
      const date = new Date(job['Date Published']).toLocaleDateString();
      dateArray.push({ date, index });
    });
    dateArray.sort((a, b) => b.date.localeCompare(a.date));

    // addedIndeces set to avoid repeated jobs
    const filteredJobs = [];
    const addedIndices = new Set();

    dateArray.forEach(({ date, index }) => {
      if (!addedIndices.has(index)) {
        filteredJobs.push(data[index]);
        addedIndices.add(index);
      }
    });

    setJobs(filteredJobs);
  }

  const sortCompanies = () => {
    const companiesArray = []
    data.forEach((job, index) => {
      const companyName = job['Company Name']
      companiesArray.push({ companyName, index})
    })

    let filteredJobs = []
    const addedIndices = new Set()

    companiesArray.forEach(({companyName, index}) => {
      if (!addedIndices.has(index)) {
        filteredJobs.push(data[index]);
        addedIndices.add(index);
      }
      return filteredJobs.sort().reverse()
    })

    setJobs(filteredJobs)
  }

  return (
    <>
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
            <input type="text" placeholder="Keywords" onChange={handleKeyword} />
          </div>
          <div className="order-by">
            <h3>Order by:</h3>
            <button onClick={showRecent}>Recent</button>
            <button onClick={sortCompanies}>Companies A-Z</button>
          </div>
        </div>
        <JobList data={jobs} getDaysSinceJobPost={getDaysSinceJobPost} />
      </main>
    </>
  )
}

export default JobBoard
