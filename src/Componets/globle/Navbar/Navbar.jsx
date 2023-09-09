import React from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid">
        <div className="row ps-2 pe-2 pt-1 d-flex align-content-center">
          <div className="col-6 col-xxl-6 col-xl-6 col-lg-7">
            <div className="row">
              <div className="col-6  col-lg-1 pt-2">
                <Logo />
              </div>
              <div
                className="col-10 ps-5 d-none d-lg-block"
                style={{ paddingTop: "10px" }}
              >
                <ul className="d-flex align-content-center navbar-list-class">
                  <div className="findtalenthover">
                    {" "}
                    <li className="ps-3">Find Talent</li>
                    <div className="findtalenthover-under-word">
                      <div className="row mt-4 ps-5 pb-5">
                        <div className="col-4 border border-2 border-secondary border-start-0  border-top-0  border-bottom-0">
                          <div>
                            <span>Post a job and hire a pro</span>{" "}
                            <span className="float-end pt-2 pe-5">
                              <AiOutlineCaretRight />
                            </span>
                            <br />
                            <span className="text-secondary">
                              Talent Marketsplace
                            </span>
                          </div>
                          <div className="mt-4">
                            <span>Browse and Buy a Products</span>{" "}
                            <span className="float-end pt-2 pe-5">
                              <AiOutlineCaretRight />
                            </span>
                            <br />
                            <span className="text-secondary">
                              Project Catalog
                            </span>
                          </div>
                          <div className="mt-4">
                            <span>Get Advise</span>{" "}
                            <span className="float-end pt-2 pe-5">
                              <AiOutlineCaretRight />
                            </span>
                            <br />
                            <span className="text-secondary">
                              Talent Marketsplace
                            </span>
                          </div>
                        </div>
                        <div className="col-4 ps-5">
                          <div>
                            <span className="fs-4">Talent Marketsplace </span>
                            <br />
                            <span>Learn about more...</span>
                            <br />
                            <Link>Hire on Talent Marketplace</Link>
                          </div>
                        </div>
                        <div className="col-4 ps-5">
                          <div className="text-secondary">
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Design & Creative
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Sales & Markting
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Writing & Translation
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                            <span className="text-secondary d-block pt-3">
                              Development & IT
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <li className="ps-3">Find Work</li>
                  <li className="ps-3">Why Upwork </li>
                  <li className="ps-3">Enterprice</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 col-xxl-6 col-xl-6 col-lg-5 d-none d-lg-block ">
            <div className="row float-end">
              <div className="col-6 mt-2">
                <input
                  type="search"
                  placeholder="search"
                  className="rounded-5 p-1 ps-3 pe-3"
                  style={{ width: "10~0%" }}
                />
              </div>

              <div className="col-6 mt-1">
                <div className="d-flex float-end">
                  <div className="pt-2">
                    <button
                      className="me-3 border-0 bg-transparent "
                      onClick={() => navigate("/asfreelancer/login")}
                      style={{ fontSize: "14px" }}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="float-end">
                    <button
                      className="ms-auto rounded-5 p-2 ps-4 float-end text-white border-0 pe-4"
                      onClick={() => navigate("/signup")}
                      style={{ backgroundColor: "#108a00" }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "-50px" }} />
        </div>
        <div className="row">
          <div className="col-12 mt-0  mt-lg-5  hero-img-up-main-div-text col-lg-6">
            <div className="w-75">
            <h1 className="hero-img-up-main-text">
              How work <br /> should work
            </h1>
            <p className="pt-2">
              Forget the old rules. You can have the best people.Right now.
              Right here.
            </p>
            <button className="rounded-5 p-2 ps-4  col-8 col-sm-auto text-white border-0 pe-4" style={{backgroundColor:"#108a00"}} onClick={()=>navigate("/signup")}>Get Started</button>
            </div>
          </div>
          <div className="h-100 col-12 d-none d-lg-flex col-lg-6 d-flex justify-content-center align-items-center">
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_580,h_580,f_auto,q_auto,dpr_2.0/brontes/hero/globe@2x.jpg"
              
              alt=""
              className="img-fluid hero-img-main-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
