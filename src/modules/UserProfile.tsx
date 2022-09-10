import React from 'react'
import { useParams } from 'react-router-dom';
 const UserProfile: React.FC =() => {
  const { UserId } = useParams();
  return (

    <div>{UserId}</div>
  )
}
export default UserProfile;