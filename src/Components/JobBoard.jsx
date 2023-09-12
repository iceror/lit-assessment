import JobList from "./JobList"
import NavBar from "./NavBar"


const JobBoard = ({ data }) => {

  return (
    <>
      <NavBar />
      <main>
        <div className="filters">
          <h3>Search by filters</h3>
          <input type="text" placeholder="Functional Area" />
          <input type="text" placeholder="Seniority" />
          <input type="text" placeholder="Perks" />
          <input type="text" placeholder="Location" />
        </div>
        <hr />
        <div className="search">
          <h3>Search by keywords</h3>
          <input type="text" placeholder="Keywords" />
          <div className="order-by">
            <h3>Order by:</h3>
            <button>Recent</button>
            <button>Companies A-Z</button>
          </div>
        </div>
        <JobList data={data} />
      </main>
    </>
  )
}

export default JobBoard