import { useEffect, useState } from "react"
import JobList from "./JobList"

const JobBoard = ({ data, getDaysSinceJobPost }) => {
  const [jobs, setJobs] = useState([]);
  const [functionalArea, setFunctionalArea] = useState('');
  const [seniority, setSeniority] = useState('');
  const [perks, setPerks] = useState('');
  const [location, setLocation] = useState('');
  const [keyword, setKeyword] = useState('');
  const [clickRecent, setClickRecent] = useState(false)
  const [clickCompanySort, setClickCompanySort] = useState(false)


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
    let filteredJobs = [];
    if (!clickRecent) {
      const dateArray = [];
      data.forEach((job) => {
        const date = new Date(job['Date Published']).toLocaleDateString();
        const jobId = job['ID']
        dateArray.push({ date, jobId });
      });
      dateArray.sort((a, b) => b.date.localeCompare(a.date));
      console.log(dateArray);

      const addedIndices = new Set()
      dateArray.forEach((jobInfo) => {
        const jobId = jobInfo.jobId;

        // Check if the jobId is already added to the set
        if (!addedIndices.has(jobId)) {
          addedIndices.add(jobId);

          const job = data.find((job) => job['ID'] === jobId);

          if (job) {
            filteredJobs.push(job);
          }
        }
      });
      setClickRecent(true)
    } else {
      filteredJobs = data;
      setClickRecent(false)
    }
    setJobs(filteredJobs);
  }

  const sortCompanies = () => {
  let filteredJobs = [...data];

  if (!clickCompanySort) {
    const companiesArray = [];
    const addedIndices = new Set();

    data.forEach((job) => {
      const companyName = job['Company Name'];
      const jobId = job['ID'];
      companiesArray.push({ companyName, jobId });
    });

    companiesArray.sort((a, b) => a.companyName.localeCompare(b.companyName));
    filteredJobs = [];

    companiesArray.forEach(({ jobId }) => {
      if (!addedIndices.has(jobId)) {
        // Find the job in the data array based on jobId and push it to filteredJobs
        const job = data.find((job) => job['ID'] === jobId);
        if (job) {
          filteredJobs.push(job);
          addedIndices.add(jobId);
        }
      }
    });

    setClickCompanySort(true);
  } else {
    filteredJobs.reverse();
    setClickCompanySort(false);
  }

  setJobs(filteredJobs);
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
