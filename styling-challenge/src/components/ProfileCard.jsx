import React from 'react'

const ProfileCard = () => {
    const style = {backgroundColor:"lightgray", padding:"15px", borderRadius:"8px", color:"black"};
  return (
    <div style={style}>
        <h2>Profile Card</h2>
        <p>Username: John Doe</p>
        <p>Age: 30</p>
    </div>
  )
}

export default ProfileCard