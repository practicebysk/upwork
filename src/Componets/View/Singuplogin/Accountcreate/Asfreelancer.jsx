import React, { useState } from "react";

import { getuserdata } from "../../../Config/Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Asfreelancer() {
  const [userdata, setuserdata] = useState(getuserdata);

  const navigate = useNavigate();
  const handlechange = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handlsubbmit = (e) => {
    e.preventDefault();
    const postDataa = async () => {
      if (userdata.password === userdata.cpassword) {
        const { name, email, password } = userdata;

        const response = await fetch(
          `http://localhost:3000/api/auth/freelanceruser`,
          {
            method: "POST", //
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          }
        );
        const json = await response.json();
        console.log(json);

        if (json.success) {
          console.log(json.authToken);
          localStorage.setItem("token", json.authToken);
          setuserdata({ name: "", email: " ", password: "", cpassword: "" });
          navigate("/asfreelancer/login");
          // props.showAlert("Account Created Successfully", "success");
        } else {
          // props.showAlert("Invalid Details", "danger");
        }
      } else {
        // props.showAlert("Password and Confirm Password are Note Same", "danger");
      }
    };
    postDataa();
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-center mt-5">
            <form action="" onSubmit={handlsubbmit}>
              <div>
                {" "}
                <input
                  type="name"
                  name="name"
                  id=""
                  value={userdata?.name}
                  onChange={handlechange}
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="email"
                  id=""
                  value={userdata?.email}
                  onChange={handlechange}
                  placeholder="email"
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="password"
                  id=""
                  value={userdata?.password}
                  onChange={handlechange}
                  placeholder="password"
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="cpassword"
                  id=""
                  value={userdata?.cpassword}
                  onChange={handlechange}
                  placeholder="c"
                />
              </div>
              <div>
                {" "}
                <button>Create my account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asfreelancer;
