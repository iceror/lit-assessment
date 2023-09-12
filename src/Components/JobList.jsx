import { useEffect } from 'react';
import { getData } from '../js/data-utils';
import csv from '../assets/data/job-data.csv'

const JobList = () => {
  const data = getData()
  console.log(data);
  return (
    <ul>
      {data.map((job) => {
        return (
          <li>
            <div className='main-job-info'>
              <h2>{job['Job Title']}</h2>
              <p>{job['Company Name']}</p>
              {/* TODO function that counts days */}
              <p>Posted x days ago</p>
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
