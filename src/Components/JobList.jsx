import { useEffect } from 'react';
import { getData } from '../js/data-utils';
import csv from '../assets/data/job-data.csv'

const data = getData()
console.log(data);

const JobList = () => {
  console.log(csv);

  return (
    <>
    <h2>job data here</h2>
    </>
  )
}

export default JobList