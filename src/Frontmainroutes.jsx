import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "./Componets/globle/Navbar/Navbar";
import Login from "./Componets/View/Singuplogin/Login/Login";
import Signup from "./Componets/View/Singuplogin/Signup/Signup";
import Asfreelancer from "./Componets/View/Singuplogin/Accountcreate/Asfreelancer";
import Freelancerdashboard from "./Componets/View/freelancerdashboard/Freelancerdashboard";
import Asclient from "./Componets/View/Singuplogin/Accountcreate/Asclient";
import Clienstdashboard from "./Componets/View/Clienstdashboard/Clienstdashboard";
import ContextState from "./Context/Context";

function Frontmainroutes() {
  return (
    <Suspense fallback={<h1>Lodiing....</h1>}>
      <div className="Frontmainroutes">
        <ContextState>
          <Routes>
            <Route path={"/"} element={<Navbar />} />

            {/* enter */}
            <Route path={"/asfreelancer/login"} element={<Login />} />
            <Route path={"/asclient/login"} element={<Login />} />
            <Route path={"/signup"} element={<Signup />} />

            {/* option */}
            <Route path={"/asfreelancer"} element={<Asfreelancer />} />
            <Route path={"/asclient"} element={<Asclient />} />

            <Route
              path={"/dashfreelancer/:id"}
              element={<Freelancerdashboard />}
            />
            <Route path={"/dashclient/:id"} element={<Clienstdashboard />} />
          </Routes>
        </ContextState>
      </div>
    </Suspense>
  );
}

export default Frontmainroutes;
