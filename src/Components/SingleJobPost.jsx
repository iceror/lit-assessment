import { useParams } from "react-router";
import JobList from "./JobList";
import { useEffect, useState } from "react";
import PerksImages from "./PerksImages";

const SingleJobPost = ({ data, getDaysSinceJobPost }) => {
  const { jobPath } = useParams();
  const [similarJobs, setSimilarJobs] = useState([])

  const pathNums = jobPath.match(/\d+/g);
  const jobIndex = Number(pathNums) - 1
  const singleJob = data[jobIndex]
  // console.log(jobIndex);
  console.log(singleJob);

  const perksArray = singleJob['Perks (coming soon)'].split(';').map(perk => perk.trim());

  const getSimilarJobs = () => {
    let similar = data.filter(job => {
      return (job['Seniority slug'] === singleJob['Seniority slug'] && job['Functional Area Slug'] === singleJob['Functional Area Slug'])
    })

    setSimilarJobs(similar)
  }

  useEffect(() => {
    getSimilarJobs()
  }, [])

  return (
    <>
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
          <PerksImages perksArray={perksArray}/>
        </div>
        <div className="single-job-modality">
          <p>{singleJob['Job Type']}</p>
          <p>{singleJob['Location Full'].split(';')}</p>
          <p>{singleJob['Seniority']}</p>
          <p>Posted {getDaysSinceJobPost(singleJob['Date Published'])} days ago</p>
        </div>
        <button className="apply">Apply Now</button>
      </section>
      <section className="about-job">
        <div className="about">
          <h2>About the job</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestias!</p>
          <button>Read more</button>
        </div>
      </section>
      <div className="warning">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus officiis nisi dolore quod et dolor repellendus architecto nobis amet iste cum maiores suscipit, distinctio iure, in veritatis ipsam fuga!</p>
      </div>
      <section className="about-company">
        <h2>About the company</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus ea dolorem eum sequi nulla quidem vel numquam, voluptatem delectus.</p>
        <button>See company profile</button>
      </section>
      <section className="similar-jobs">
        <h2>Similar Jobs</h2>
        <JobList data={similarJobs} getDaysSinceJobPost={getDaysSinceJobPost} />
      </section>
    </>
  )
}

export default SingleJobPost
