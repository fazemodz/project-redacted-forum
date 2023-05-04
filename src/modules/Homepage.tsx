import React from 'react'
import {Username} from "./utils/NeededInformation";
import UserPostsCard from'./UserPostsCard';
import axios from 'axios';
const Homepage: React.FC = () =>{
    React.useEffect(() => {
  
    }, [])
  return (
    <div>
      <UserPostsCard />
    </div>
  )
}
export default Homepage;