import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Freelancerdashboard() {

const[prorfiledata,setprofiledata]=useState([])

  const {id}=useParams()

  const getfirebasedata = async () => {
     const responce =  await axios.get(
        "https://otp-a990e-default-rtdb.firebaseio.com/updaworkuserdatafreelancer.json",
        
      );

      const value=Object.values(responce?.data)
      const key=Object.keys(responce?.data)

      key?.map((ele,index)=>value[index].id = ele)

      const getfulldetails = value.find(
        (user) =>
          user.id === id
      );
      setprofiledata(getfulldetails || {})
      
    };
    
  useEffect(()=>{
    getfirebasedata();
  },[])
  return (
    <div>
          {prorfiledata?.name}
          {prorfiledata?.id}
          {prorfiledata?.email}
    </div>
  )
}

export default Freelancerdashboard
