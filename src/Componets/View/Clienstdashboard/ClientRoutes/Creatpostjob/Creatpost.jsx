import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Creatpost() {
    const[prorfiledata,setprofiledata]=useState([])

    const navigate=useNavigate()
  const {id}=useParams()
    const getfirebasedata = async () => {
     const responce =  await axios.get(
        "https://otp-a990e-default-rtdb.firebaseio.com/updaworkuserdataclient.json",
        
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
    <div className='container-fluid'>
         <div className="row">
            <div className="col-12"></div>
         </div>
         <div className='container'>
         <div className="row">
            <div className="col-6">
                <p>my job / Job posting</p>
            </div>
            <div className="col-6 ">
                <button className='float-end' onClick={()=>navigate(`/client/${id}/getting-started`)}>post a new job</button>
            </div>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Creatpost
