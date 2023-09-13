import { useNavigate } from 'react-router';
import location from '../assets/img/location.png'
import clock from '../assets/img/clock.png'
import seniority from '../assets/img/flower.png'
import PerksImages from './PerksImages';

const JobList = ({ data, getDaysSinceJobPost }) => {
  let navigate = useNavigate();

  const routeChange = (job) => {
    let path = `/jobs/job-${job['ID']}-${job['Job Title'].replace(/[\s/]/g, '-')}-${job['Company Name'].replace(/[\s/]/g, '-')}`;
    navigate(path);  
    // window.location.pathname = path
    // window.location.reload()
  }

  return (
    data.length === 0 ? <h3>We don't have jobs that match that description yet 😬</h3> :
      (<ul className='job-list'>
        {/* TO DO render only 25 elements and make various pages .slice(0,26) */}
        {data.map((job) => {
          const perksArray = job['Perks (coming soon)'].split(';').map(perk => perk.trim());
          // let path = `jobs/job-${index + 1}-${job['Job Title'].replace(/[\s/]/g, '-')}-${job['Company Name'].replace(/[\s/]/g, '-')}`;

          return (
            <li key={`job-${job['ID']}`} onClick={() => routeChange(job)}>
              <div className='main-job-info'>
                <h2>{job['Job Title']}</h2>
                <p>{job['Company Name']}</p>
                <p>Posted {getDaysSinceJobPost(job['Date Published'])} days ago</p>
              </div>
              <div className="job-modality">
                <div>
                  <img src={clock} alt="" />
                  <p>{job['Job Type']}</p>
                </div>
                <div>
                  <img src={location} alt="" />
                  <p>{job['Location Full'].split(';').join(',')}</p>
                </div>
                <div>
                  <img src={seniority} alt="" />
                  <p>{job['Seniority']}</p>
                </div>
              </div>
              <ul className="perks">
                <PerksImages perksArray={perksArray} />
              </ul>
            </li>
          )
        })}
      </ul>
      )
  )
}

export default JobList
