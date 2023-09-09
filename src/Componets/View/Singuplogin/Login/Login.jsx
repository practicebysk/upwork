import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const location = useLocation();

  const handlechange = (e) => {
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handlsubbmit = (e) => {
    e.preventDefault();
    const getfirebasedata = async () => {
      if (location.pathname === "/asfreelancer/login") {
        // freelancer
        const response = await fetch(`http://localhost:3000/api/auth/freelancer/login`, {
          method: "POST", //
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: logindata.email,
            password: logindata.password,
          }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
          localStorage.setItem("token", json.authToken);
          const token=localStorage.getItem("token")
          setlogindata({ email: " ", password: "" });
          navigate(`/dashfreelancer/${token}`);

          // props.showAlert("Succesfully Login", "success");
        } else {
          // props.showAlert("Invalid Credentials", "danger");
        }
      } else if (location.pathname === "/asclient/login") {
        // client
        const response = await fetch(`http://localhost:3000/api/auth/client/login`, {
          method: "POST", //
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: logindata.email,
            password: logindata.password,
          }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
         localStorage.setItem("token",json.authToken);
         const token=localStorage.getItem("token")
          navigate("/");
          setlogindata({ email: " ", password: "" });
          navigate(`/dashclient/${token}`);
 
          // props.showAlert("Succesfully Login", "success");
        } else {
          // props.showAlert("Invalid Credentials", "danger");
        }
      }
    };
    getfirebasedata();
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-center ">
            <div>
              <form action="" onSubmit={handlsubbmit}>
                <div>
                  <input
                    type="text"
                    value={logindata.email}
                    name="email"
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={logindata.password}
                    name="password"
                    onChange={handlechange}
                  />
                </div>
                <div>
                  <button type="submit">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={() => navigate("/signup")}>
        Don't have an Upwork account?{" "}
      </button> */}
    </div>
  );
}

export default Login;
