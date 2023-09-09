import React, { useState } from 'react'
import Avatar from 'react-avatar-edit'
function profileimg() {

    const[imgcrop,setimgcrop]=useState(false)

  return (
    <div>
      <Avatar width={"400px"} height={"300px"}>
         
      </Avatar>
    </div>
  )
}

export default profileimg

