import { useNavigate, useParams } from "react-router";
import JobList from "./JobList";
import { useEffect, useState } from "react";
import PerksImages from "./PerksImages";
import location from '../assets/img/location.png'
import clock from '../assets/img/clock.png'
import seniority from '../assets/img/flower.png'
import calendar from '../assets/img/calendar.png'

const SingleJobPost = ({ data, getDaysSinceJobPost }) => {
  const { jobPath } = useParams();
  const [similarJobs, setSimilarJobs] = useState([])

  // console.log(jobPath);
  const pathNums = jobPath.match(/\d+/g);
  const jobIndex = Number(pathNums)
  const singleJob = data[jobIndex - 1];

  // console.log(jobIndex);
  // console.log(singleJob);

  const perksArray = singleJob['Perks (coming soon)'].split(';').map(perk => perk.trim());

  const getSimilarJobs = () => {
    let similar = data.filter(job => {
      return (job['Seniority slug'] === singleJob['Seniority slug'] && job['Functional Area Slug'] === singleJob['Functional Area Slug'] && job['Job Title'] != singleJob['Job Title'])
    })

    setSimilarJobs(similar)
  }

  useEffect(() => {
    getSimilarJobs()
  }, [jobPath])

  let navigate = useNavigate()
  const backToJobBoard = () => {
    navigate('/')
  }

  return (
    <>
      <section className="job-details">
        <div className="job-title">
          <button className="back-to-job-board" onClick={backToJobBoard}> {'< Back to Job Board'}</button>
          <h2 >{singleJob['Job Title']}</h2>
        </div>
        <div className="company">
          <div className="company-name">

            <h2>{singleJob['Company Name']}</h2>
            <h3>Company tagline</h3>
          </div>
          <div className="perks">
            <PerksImages perksArray={perksArray} />
          </div>
          <div className="single-job-modality">
            <div>
              <img src={clock} alt="" />
              <p>{singleJob['Job Type']}</p>
            </div>
            <div>
              <img src={location} alt="" />
              <p>{singleJob['Location Full'].split(';').join(',')}</p>
            </div>
            <div>
              <img src={seniority} alt="" />
              <p>{singleJob['Seniority']}</p>
            </div>
            <div>
              <img src={calendar} alt="" />
              <p>Posted {getDaysSinceJobPost(singleJob['Date Published'])} days ago</p>
            </div>
          </div>
          <button className="apply">Apply</button>
        </div>
      </section>
      <main>

        <section className="about-job">
          <div className="about">
            <h2>About the job</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestias!</p>
            <button>Read more</button>
          </div>
          <div className="warning">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus officiis nisi dolore quod et dolor repellendus architecto nobis amet iste cum maiores suscipit, distinctio iure, in veritatis ipsam fuga!</p>
          </div>
        </section>
        <section className="about-company">
          <h2>About The Company</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus ea dolorem eum sequi nulla quidem vel numquam, voluptatem delectus.</p>
          <button>See company profile</button>
        </section>
        <section className="similar-jobs">
          <h2>Similar Jobs</h2>
          <JobList data={similarJobs} getDaysSinceJobPost={getDaysSinceJobPost} />
        </section>
      </main>
    </>
  )
}

export default SingleJobPost
