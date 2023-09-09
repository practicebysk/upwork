import React, { useState } from "react";
import Logo from "../../../globle/Logo/Logo";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Singup() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isButtonVisible, setButtonVisible] = useState(false);

  const navigate = useNavigate();

  const handleOptionChange = (index) => {
    setSelectedOption(index);
    setButtonVisible(true);
  };

  const radiobuttons = [
    { label: "I’m a client, hiring for a project" },
    { label: "I’m a freelancer, looking for work" },
  ];

  return (
    <div className="container-fluid">
      <div className="row ps-2 pe-2 pt-1">
        <div className="col-1 pt-2">
          <Logo />
        </div>
      </div>
      <div className="row p-5 d-flex justify-content-center">
        <div className="col-6 rounded-4 border border-1 border-secondary">
          <div className="text-center mt-5">
            <h1 className="fw-semibold">Join as a client or freelancer</h1>
          </div>

          <div
            className="row d-flex justify-content-between"
            style={{ padding: "40px 80px" }}
          >
            {radiobuttons.map((radio, index) => (
              <div
                key={index}
                className={`col-6 p-3 pt-0 rounded-3 box-hover-class1  ${
                  selectedOption !== index
                    ? "box-hover-without-class"
                    : "box-hover-class"
                } `}
                onClick={() => handleOptionChange(index)}
              >
                <div className="clearfix mb-1 mt-2">
                  <input
                    type="radio"
                    checked={selectedOption === index}
                    name="checkbutton"
                    className="float-end"
                    onChange={() => {}}
                  />
                </div>
                <div className="col-2">
                  <div className="up-illustration">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 145 130"
                      aria-hidden="true"
                      role="img"
                    >
                      <g clipPath="url(#clip0_11393_56023)">
                        <path
                          d="M143.82 99.447H1.18c-.656 0-1.18.525-1.18 1.18 0 .656.524 1.18 1.18 1.18h142.64c.656 0 1.18-.524 1.18-1.18 0-.655-.524-1.18-1.18-1.18z"
                          fill="url(#paint0_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M133.201 101.939c.918 0 1.705-.786 1.705-1.704V22.098c0-1.18-.787-2.098-1.836-2.098H13.11c-1.048 0-1.835.918-1.835 2.098v78.006c0 .918.787 1.704 1.705 1.704H133.2v.131z"
                          fill="#9AAA97"
                        ></path>
                        <path
                          d="M132.021 101.939c.917 0 1.704-.786 1.704-1.704V22.098c0-1.18-.787-2.098-1.836-2.098H11.93c-1.049 0-1.835.918-1.835 2.098v78.006c0 .918.786 1.704 1.704 1.704h120.222v.131z"
                          fill="url(#paint1_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M131.889 20H11.93c-1.049 0-1.835.787-1.835 1.835v2.885h123.761v-2.885c-.131-.917-.918-1.835-1.967-1.835z"
                          fill="#C5D1C3"
                        ></path>
                        <path
                          d="M86.004 78.211H57.817c-1.049 0-1.836-.786-1.836-1.835v-4.982c0-1.049.787-1.835 1.836-1.835h28.187c1.049 0 1.835.786 1.835 1.835v4.982c0 1.049-.786 1.835-1.835 1.835z"
                          fill="url(#paint2_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M47.067 78.211H18.748c-1.048 0-1.835-.786-1.835-1.835v-4.982c0-1.049.787-1.835 1.835-1.835h28.188c1.048 0 1.835.786 1.835 1.835v4.982c.131 1.049-.787 1.835-1.704 1.835zm79.185 0H97.934c-1.049 0-1.835-.786-1.835-1.835v-4.982c0-1.049.786-1.835 1.835-1.835h28.318c1.049 0 1.836.786 1.836 1.835v4.982c-.131 1.049-.918 1.835-1.836 1.835zM71.845 64.442c9.123 0 16.52-7.395 16.52-16.519 0-9.123-7.397-16.519-16.52-16.519S55.326 38.8 55.326 47.924c0 9.123 7.396 16.518 16.52 16.518z"
                          fill="#C3D2C3"
                        ></path>
                        <path
                          d="M75.778 50.939l-.787-4.982H68.83l-.787 4.982h7.735z"
                          fill="url(#paint3_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M71.845 48.973c1.966 0 3.67.917 3.67.917l-.262-1.966H71.32l.525 1.049z"
                          fill="url(#paint4_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M68.043 47.794l.13.131c1.05.656 2.36 1.18 3.671 1.18 1.443 0 2.754-.524 3.934-1.311 1.704-1.18 2.753-3.147 2.753-5.375 0-3.671-2.885-6.687-6.555-6.687-3.671 0-6.687 2.885-6.818 6.556 0 2.228 1.18 4.195 2.885 5.506z"
                          fill="url(#paint5_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M86.135 52.776c-1.31-2.098-3.67-3.278-6.161-3.278-.656 0-1.312.131-1.967.262l-1.704.525a16.159 16.159 0 01-8.653 0l-1.705-.525c-.655-.13-1.31-.262-1.966-.262-2.491 0-4.85 1.311-6.162 3.278-.393.524-.655 1.18-.918 1.835 2.623 5.769 8.391 9.833 15.208 9.833 6.818 0 12.586-4.064 15.208-9.833-.524-.655-.786-1.311-1.18-1.835z"
                          fill="url(#paint6_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M32.907 64.442c9.123 0 16.519-7.395 16.519-16.519 0-9.123-7.396-16.519-16.52-16.519-9.122 0-16.518 7.396-16.518 16.52 0 9.123 7.395 16.518 16.519 16.518z"
                          fill="#C3D2C3"
                        ></path>
                        <path
                          d="M36.71 50.939l-.656-4.982H29.76l-.655 4.982h7.603z"
                          fill="url(#paint7_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M32.907 48.973c1.967 0 3.671.917 3.671.917l-.262-1.966h-3.933l.524 1.049z"
                          fill="url(#paint8_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M29.105 47.794l.131.131c1.049.656 2.36 1.18 3.671 1.18 1.442 0 2.753-.524 3.933-1.311 1.704-1.18 2.753-3.147 2.753-5.375 0-3.671-2.884-6.687-6.555-6.687-3.67 0-6.686 2.885-6.817 6.556 0 2.228 1.049 4.195 2.884 5.506z"
                          fill="url(#paint9_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M47.197 52.776c-1.311-2.098-3.671-3.278-6.162-3.278-.655 0-1.311.131-1.966.262l-1.705.525a16.159 16.159 0 01-8.653 0l-1.704-.525c-.655-.13-1.311-.262-1.966-.262-2.492 0-4.851 1.311-6.162 3.278-.394.524-.656 1.18-.918 1.835 2.622 5.769 8.39 9.833 15.208 9.833 6.817 0 12.586-4.064 15.208-9.833-.525-.655-.787-1.311-1.18-1.835z"
                          fill="url(#paint10_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M112.093 64.442c9.123 0 16.519-7.395 16.519-16.519 0-9.123-7.396-16.519-16.519-16.519-9.123 0-16.519 7.396-16.519 16.52 0 9.123 7.396 16.518 16.519 16.518z"
                          fill="#C3D2C3"
                        ></path>
                        <path
                          d="M115.896 50.939l-.656-4.982h-6.292l-.656 4.982h7.604z"
                          fill="url(#paint11_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M112.094 48.973c1.966 0 3.671.917 3.671.917l-.263-1.966h-3.933l.525 1.049z"
                          fill="url(#paint12_linear_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M108.161 47.794l.131.131c1.049.656 2.36 1.18 3.671 1.18 1.442 0 2.753-.524 3.933-1.311 1.704-1.18 2.753-3.147 2.753-5.375 0-3.671-2.884-6.687-6.555-6.687s-6.687 2.885-6.818 6.556c.131 2.228 1.18 4.195 2.885 5.506z"
                          fill="url(#paint13_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M126.384 52.776c-1.311-2.098-3.67-3.278-6.161-3.278-.656 0-1.311.131-1.967.262l-1.704.525a16.16 16.16 0 01-8.653 0l-1.704-.525c-.656-.13-1.311-.262-1.967-.262-2.491 0-4.85 1.311-6.162 3.278-.393.524-.655 1.18-.918 1.835 2.623 5.769 8.391 9.833 15.208 9.833 6.818 0 12.586-4.064 15.208-9.833-.524-.655-.786-1.311-1.18-1.835z"
                          fill="url(#paint14_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M16.912 22.49c0 .525-.393 1.05-1.049 1.05-.524 0-1.048-.394-1.048-1.05 0-.655.393-1.049 1.048-1.049.525 0 1.05.394 1.05 1.05z"
                          fill="url(#paint15_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M13.635 22.49c0 .525-.394 1.05-1.05 1.05-.524 0-1.048-.394-1.048-1.05 0-.655.393-1.049 1.049-1.049.655 0 1.049.394 1.049 1.05z"
                          fill="url(#paint16_radial_11393_56023-uid-5)"
                        ></path>
                        <path
                          d="M78.399 98.398h1.704v3.278h1.574v3.277h1.704v3.278h3.277v-3.278h-1.573v-3.277h-1.704v-3.278h-1.704v-4.982h4.981v-1.704h-1.573v-1.573h-1.704v-1.705h-1.704v-1.573h-1.574v-1.704H78.4v-1.573h-1.573v-1.705H75.12v-1.573h-1.573v-1.704h-1.704V99.97h1.704v-1.573h1.573v-1.704h1.705V95.12h1.573v3.277z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M71.845 99.972h1.704v1.704h-1.704v1.704h-1.704V75.324h1.704v1.705h1.704v1.704h-1.704v21.239zm3.278-21.37h-1.705v1.704h1.704v-1.704zm1.704 3.277v-1.704h-1.704v1.704h1.704zm1.573 0h-1.704v1.705H78.4v-1.705zm0 3.278h1.704v-1.704H78.4v1.704zm6.686 4.982v1.704h1.705V90.14h-1.705zm-3.408-4.982h-1.705v1.704h1.705v-1.704zm3.408 4.982v-1.704h-1.704v1.704h1.704zm-3.408-3.278v1.573h1.704V86.73h-1.704v.131zm-1.573 15.864v2.229h1.573v-3.409h-1.705v1.18h.132zm6.555-1.049h-1.705v3.409h1.705v-3.409zm-13.11-1.704h1.573v-1.705h-1.705v1.705h.131zm11.536 0v-1.705h-1.704v3.409h1.704v-1.704zm3.278-6.556v-1.704H86.66v1.704h-4.982v5.114h1.704v-3.408h6.555v-1.705h-1.573zm-1.704 12.586v2.36h1.704v-3.408H86.66v1.048zm-9.833-9.308h-1.704v1.704h3.408V94.99h-1.704v1.704zm3.278 2.884v-1.18H78.4v3.278h1.704v-2.098zm3.277 8.653v1.704h3.409v-1.704h-3.409zm0-1.966v-1.311h-1.704v3.408h1.704v-2.097z"
                          fill="#13544E"
                        ></path>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_11393_56023-uid-5"
                          x1="-.022"
                          y1="100.666"
                          x2="145.022"
                          y2="100.666"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#C3D2C3" stopOpacity="0"></stop>
                          <stop offset=".309" stopColor="#C3D2C3"></stop>
                          <stop offset=".374" stopColor="#C3D2C3"></stop>
                          <stop offset=".75" stopColor="#C3D2C3"></stop>
                          <stop
                            offset="1"
                            stopColor="#C3D2C3"
                            stopOpacity=".014"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_11393_56023-uid-5"
                          x1="71.874"
                          y1="102.058"
                          x2="71.874"
                          y2="20.044"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E4EBE4"></stop>
                          <stop offset=".61" stopColor="#E2E9E2"></stop>
                          <stop offset=".89" stopColor="#DBE4DB"></stop>
                          <stop offset="1" stopColor="#D5E0D5"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_11393_56023-uid-5"
                          x1="55.969"
                          y1="73.935"
                          x2="87.824"
                          y2="73.935"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F7B0B2"></stop>
                          <stop offset="1" stopColor="#F66DBC"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_11393_56023-uid-5"
                          x1="68.074"
                          y1="48.423"
                          x2="75.718"
                          y2="48.423"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".52" stopColor="#F7B0B2"></stop>
                          <stop offset=".642" stopColor="#EEA5A8"></stop>
                          <stop offset=".856" stopColor="#D5878D"></stop>
                          <stop offset="1" stopColor="#C17078"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_11393_56023-uid-5"
                          x1="73.488"
                          y1="49.985"
                          x2="73.488"
                          y2="48.059"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A06069" stopOpacity="0"></stop>
                          <stop offset="1" stopColor="#A06069"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_11393_56023-uid-5"
                          x1="29.099"
                          y1="48.423"
                          x2="36.743"
                          y2="48.423"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".52" stopColor="#D5E0D5"></stop>
                          <stop offset=".645" stopColor="#CAD6CA"></stop>
                          <stop offset=".865" stopColor="#AEBDAC"></stop>
                          <stop offset="1" stopColor="#9AAA97"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint8_linear_11393_56023-uid-5"
                          x1="34.513"
                          y1="49.985"
                          x2="34.513"
                          y2="48.059"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#65735B" stopOpacity="0"></stop>
                          <stop offset="1" stopColor="#65735B"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint11_linear_11393_56023-uid-5"
                          x1="108.257"
                          y1="48.423"
                          x2="115.901"
                          y2="48.423"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".52" stopColor="#D5E0D5"></stop>
                          <stop offset=".645" stopColor="#CAD6CA"></stop>
                          <stop offset=".865" stopColor="#AEBDAC"></stop>
                          <stop offset="1" stopColor="#9AAA97"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint12_linear_11393_56023-uid-5"
                          x1="113.671"
                          y1="49.985"
                          x2="113.671"
                          y2="48.059"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#65735B" stopOpacity="0"></stop>
                          <stop offset="1" stopColor="#65735B"></stop>
                        </linearGradient>
                        <radialGradient
                          id="paint5_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(70.365 40.15) scale(7.9257)"
                        >
                          <stop offset=".677" stopColor="#F7B0B2"></stop>
                          <stop offset=".797" stopColor="#E69B9F"></stop>
                          <stop offset="1" stopColor="#C17078"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint6_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(70.975 49.495) scale(20.0853)"
                        >
                          <stop offset=".677" stopColor="#14A800"></stop>
                          <stop offset=".802" stopColor="#139300"></stop>
                          <stop offset="1" stopColor="#126B00"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint9_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(31.39 40.15) scale(7.92571)"
                        >
                          <stop offset=".677" stopColor="#D5E0D5"></stop>
                          <stop offset=".801" stopColor="#C1CEC0"></stop>
                          <stop offset="1" stopColor="#9AAA97"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint10_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(32 49.495) scale(20.0853)"
                        >
                          <stop offset=".677" stopColor="#9AAA97"></stop>
                          <stop offset=".804" stopColor="#889782"></stop>
                          <stop offset="1" stopColor="#65735B"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint13_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(110.549 40.15) scale(7.9257)"
                        >
                          <stop offset=".677" stopColor="#D5E0D5"></stop>
                          <stop offset=".801" stopColor="#C1CEC0"></stop>
                          <stop offset="1" stopColor="#9AAA97"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint14_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(111.158 49.495) scale(20.0852)"
                        >
                          <stop offset=".677" stopColor="#9AAA97"></stop>
                          <stop offset=".804" stopColor="#889782"></stop>
                          <stop offset="1" stopColor="#65735B"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint15_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(15.62 22.178) scale(1.02274)"
                        >
                          <stop stopColor="#14A800"></stop>
                          <stop offset=".334" stopColor="#14A500"></stop>
                          <stop offset=".557" stopColor="#149C00"></stop>
                          <stop offset=".747" stopColor="#138D00"></stop>
                          <stop offset=".918" stopColor="#127800"></stop>
                          <stop offset="1" stopColor="#126B00"></stop>
                        </radialGradient>
                        <radialGradient
                          id="paint16_radial_11393_56023-uid-5"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.459 22.178) scale(1.02274)"
                        >
                          <stop stopColor="#01CDBE"></stop>
                          <stop offset=".265" stopColor="#02CABE"></stop>
                          <stop offset=".441" stopColor="#04C1BE"></stop>
                          <stop offset=".592" stopColor="#08B2BF"></stop>
                          <stop offset=".728" stopColor="#0D9DC0"></stop>
                          <stop offset=".855" stopColor="#1481C1"></stop>
                          <stop offset=".972" stopColor="#1D60C3"></stop>
                          <stop offset="1" stopColor="#1F57C3"></stop>
                        </radialGradient>
                        <clipPath id="clip0_11393_56023-uid-5">
                          <rect width="145" height="130" fill="#fff"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="mt-3">
                  <h4>{radio.label}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mb-4">
            <button
              disabled={isButtonVisible === false}
              className="rounded-5  p-2 ps-4  text-white border-0 pe-4"
              style={{
                backgroundColor: `${
                  isButtonVisible === false ? "grey" : "#108a00"
                }`,
                transition: "all 0.1s",
              }}
            >
              {isButtonVisible ? (
                selectedOption === 0 ? (
                  <span onClick={() => navigate("/asclient")}>
                    Join as a Client
                  </span>
                ) : (
                  <span onClick={() => navigate("/asfreelancer")}>
                    Apply as a Freelancer
                  </span>
                )
              ) : (
                "Create Account"
              )}
            </button>

            
          </div>
          <div className="d-flex justify-content-center mb-3" >
          <div><p style={{fontSize:"13px"}}>Already have an account? <Link to={"/asfreelancer/login/"}>Log In</Link></p></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
