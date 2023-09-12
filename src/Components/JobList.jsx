import { useEffect } from 'react';
// import { getData } from '../js/data-utils';
import remoteFriendly from '../assets/img/remote-friendly.png'
import unlimitedVacation from '../assets/img/unlimited-vacation.png'
import parentalLeave from '../assets/img/paid-parental-leave.png'
import latinxInTech from '../assets/img/latinx-in-tech.png'
import womenInTech from '../assets/img/women-in-tech.png'
import lgbtiq from '../assets/img/lgbtiq.png'

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
    <ul className='job-list'>
      {data.map((job, index) => {
        const perksArray = job['Perks (coming soon)'].split(';').map(perk => perk.trim());
        return (
          <li key={`job-${index}`}>
            <div className='main-job-info'>
              <h2>{job['Job Title']}</h2>
              <p>{job['Company Name']}</p>
              <p>Posted {getDaysSinceJobPost(job['Date Published'])} days ago</p>
            </div>
            <div className="job-modality">
              <ul>
                <li>{job['Job Type']}</li>
                <li>{job['Location Full'].split(';')}</li>
                <li>{job['Seniority']}</li>
              </ul>
            </div>
            <div className="perks">
                {perksArray.map((perk) => {
                  return (
                    <ul>
                    <li>{perk === 'remotefriendly' ? <img src={remoteFriendly} alt="" /> : ''}</li>
                    <li>{perk === 'unlimitedvacation' ? <img src={unlimitedVacation} alt="" /> : ''}</li>
                    <li>{perk === 'paidparentalleave' ? <img src={parentalLeave} alt="" /> : ''}</li>
                    <li>{perk === 'latinxintech' ? <img src={latinxInTech} alt="" /> : ''}</li>
                    <li>{perk === 'womenintecherg' ? <img src={womenInTech} alt="" /> : ''}</li>
                    <li>{perk === 'lgbtqierg-2' ? <img src={lgbtiq} alt="" /> : ''}</li>
                    </ul>
                  )
                })}
            </div>
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

export default JobList
