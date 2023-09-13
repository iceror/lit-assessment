import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { getData } from '../js/data-utils';
import remoteFriendly from '../assets/img/remote-friendly.png'
import unlimitedVacation from '../assets/img/unlimited-vacation.png'
import parentalLeave from '../assets/img/paid-parental-leave.png'
import latinxInTech from '../assets/img/latinx-in-tech.png'
import womenInTech from '../assets/img/women-in-tech.png'
import lgbtqi from '../assets/img/lgbtiq.png'
import location from '../assets/img/location.png'
import clock from '../assets/img/clock.png'
import seniority from '../assets/img/flower.png'

const JobList = ({ data }) => {
  // const data = getData()
  // console.log(data);

  const getDaysSinceJobPost = (datePublished) => {
    const oneDay = (24 * 60 * 60 * 1000);
    const today = new Date();
    const dayPublished = new Date(datePublished);
    const daysPassed = Math.round(Math.abs((today - dayPublished) / oneDay));
    return daysPassed
  }

  let navigate = useNavigate();

  const routeChange = (job, index) => {
    console.log(job);
    let path = `jobs/job-${index + 1}-${job['Job Title'].replace(/\s+/g, '-')}-${job['Company Name'].replace(/\s+/g, '-')}`;
    navigate(path)
  }

  return (
    data.length === 0 ? <h3>We don't have jobs that match that description yet 😬</h3> :
      (<ul className='job-list'>
        {/* TO DO render only 25 elements and make various pages .slice(0,26) */}
        {data.map((job, index) => {
          const perksArray = job['Perks (coming soon)'].split(';').map(perk => perk.trim());

          const renderPerkImages = (perksArray) => {
            return perksArray.map((perk, perkIndex) => {
              switch (perk) {
                case 'remotefriendly':
                  return <img key={`perk-remote-${perkIndex}`} src={remoteFriendly} alt="Remote Friendly" />;
                case 'unlimitedvacation':
                  return <img key={`perk-unlimited-${perkIndex}`} src={unlimitedVacation} alt="Unlimited Vacation" />;
                case 'paidparentalleave':
                  return <img src={parentalLeave} alt="Paid Parental Leave" />
                case 'latinxintech':
                  return <img src={latinxInTech} alt="Latinx in Tech" />
                case 'womenintecherg':
                  return <img src={womenInTech} alt="Women in Tech" />
                case 'lgbtqierg-2':
                  return <img src={lgbtqi} alt="LGBTQI+" />
                default:
                  return null; // No image for unknown perks
              }
            });
          };

          return (
            <li key={`job-${index + 1}`} onClick={() => routeChange(job, index)}>
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
                {renderPerkImages(perksArray)}
              </ul>
            </li>
          )
        })}
      </ul>
      )
  )
}

export default JobList
