import React from 'react'
import ClientNavbar from './clientNavbar/ClientNavbar'
import MainRouteFile from './ClientRoutes/MainRouteFile.jsx/MainRouteFile'
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../../Context/Context';
import { useContext } from 'react';

function Clienstdashboard() {
  const { getuser } = useContext(Context);

  console.log(getuser);
  return (
    <div>
       <div className='container-fluid'>
               <ClientNavbar getuser={getuser}/>
            
       </div>
    </div>
  )
}

export default Clienstdashboard
