import { useParams } from "react-router";

const SingleJobPost = ({data, getDaysSinceJobPost}) => {
  const { jobPath } = useParams();
  const pathNums = jobPath.match(/\d+/g);
  const jobIndex = Number(pathNums) - 1
  const singleJob = data[jobIndex]
  // console.log(jobIndex);
  console.log(singleJob);

  return (
    <section className="job-details">
      <div className="job-title">
        <button className="back-to-job-board">Back to Job Board</button>
        <h2 >{singleJob['Job Title']}</h2>
      </div>
      <div className="company">
        <h2>{singleJob['Company Name']}</h2>
        {/* <p>{singleJob['Company tagline']}</p> */}
      </div>
      <div className="perks">

      </div>
      <div className="single-job-modality">
        <p>{singleJob['Job Type']}</p>
        <p>{singleJob['Location Full'].split(';')}</p>
        <p>{singleJob['Seniority']}</p>
        <p>Posted {getDaysSinceJobPost(singleJob['Date Published'])} days ago</p>
      </div>
      <button className="apply">Apply Now</button>
    </section>
  )
}

export default SingleJobPost
