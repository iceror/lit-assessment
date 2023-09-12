import JobList from "./JobList"
import NavBar from "./NavBar"


const JobBoard = ({data}) => {

  return (
    <>
      <NavBar />
      <h2>Job Board</h2>
      <JobList data={data} />
    </>
  )
}

export default JobBoard