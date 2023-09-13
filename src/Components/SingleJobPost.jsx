import { useParams } from "react-router";

const SingleJobPost = ({data}) => {
  const { jobPath } = useParams();
  const pathNums = jobPath.match(/\d+/g);
  const jobIndex = Number(pathNums) - 1
  console.log(jobIndex);
  console.log(data);


}

export default SingleJobPost
