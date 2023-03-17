import React from 'react'
import {Username} from "../resources/utils/NeededInformation";

const Homepage: React.FC = () =>{
    React.useEffect(() => {
    document.title = 'Homepage';
    console.log(Username);
    }, [])
  return (
    <div>Homepage</div>
  )
}
export default Homepage;