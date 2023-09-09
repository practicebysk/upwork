import React from "react";
import {  Route, Routes } from "react-router-dom";
import Creatpost from "../Creatpostjob/Creatpost";

import Getstartjob from './../Creatpostjob/jobdeatils/Getstart/Getstartjob';
import Jobtitle from "../Creatpostjob/jobdeatils/Jobtitle/Jobtittle";
import ClientNavbar from "../../clientNavbar/ClientNavbar";

function MainRouteFile() {
  return (
  
      <div>
      {/* <ClientNavbar /> */}
        <Routes>
          <Route path={"/dashclient/:id/createpost13"} element={<Creatpost />} /> 
          <Route path={"/client/:id/getting-started"} element={<Getstartjob />} />
          <Route path={"/client/:id/title"} element={<Jobtitle />} />
        </Routes>
      </div>
     
  );
}

export default MainRouteFile;
