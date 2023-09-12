import { useEffect } from 'react';
// import { getData } from '../js/data-utils';

const JobList = ({data}) => {
  // const data = getData()
  // console.log(data);

  const getDaysSinceJobPost = (datePublished) => {
    const oneDay = (24 * 60 * 60 * 1000);
    const today = new Date();
    const dayPublished = new Date(datePublished);
    const daysPassed = Math.round(Math.abs((today - dayPublished) / oneDay));
    return daysPassed
  }

  return (
    <ul>
      {data.map((job) => {
        return (
          <li>
            <div className='main-job-info'>
              <h2>{job['Job Title']}</h2>
              <p>{job['Company Name']}</p>
              <p>Posted {getDaysSinceJobPost(job['Date Published'])} days ago</p>
            </div>
            <div className="job-modality">
              <ul>
                <li>{job['Job Type']}</li>
                <li>{job['Location Full']}</li>
                <li>{job['Seniority']}</li>
              </ul>
            </div>
            <div className="perks">
              {/* TO DO add perks maybe as an array and add images */}
            </div>
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

export default JobList
