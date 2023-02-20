import React from 'react'

const Homepage: React.FC = () =>{
    React.useEffect(() => {
    document.title = 'Homepage';
    }, [])
  return (
    <div>Homepage</div>
  )
}
export default Homepage;