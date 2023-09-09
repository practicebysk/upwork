import React, { useState } from "react";
import Profileimg1 from "../profileimg/Profileimg";
import "./ClientNavbar.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import MainRouteFile from "../ClientRoutes/MainRouteFile.jsx/MainRouteFile";

function ClientNavbar(props) {
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const handleTooltipClick = (index) => {
    setVisibleTooltip(index === visibleTooltip ? null : index);
  };

  const navigate=useNavigate()


  const clickNavigation=(routes)=>{
    navigate(routes)
  }
  const {id}=useParams()
  const tooltipData = [
    {
      label: "Jobs",
      items: ["Any Hire", "Post a Job"],
      routes: [`/dashclient/${id}/createpost`,`/dashclient/${id}/createpost13`],
    },
    {
      label: "Talent",
      items: ["hire", "hire2"],
      routes: [`/dashclient/${id}/createpos2t`,`/dashclient/${id}/createpost32`],
    },
  ];


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="row">
            {tooltipData.map((tooltip, index) => (
              <div className="col-1 offset-2" key={index}>
                <div className="tooltip1">
                  <span
                    className="d-flex align-items-center"
                    onClick={() => handleTooltipClick(index)}
                  >
                    {tooltip.label} {""}
                    <span className="ps-1" style={{ fontSize: "13px" }}>
                      {" "}
                      {visibleTooltip === index ? (
                        <AiOutlineUp />
                      ) : (
                        <AiOutlineDown />
                      )}
                    </span>
                  </span>

                  <div
                    className={`tooltiptext1 ${
                      visibleTooltip === index ? "d-block" : "d-none"
                    }`}
                  >
                    {tooltip.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="d-block text-dark" onClick={() => clickNavigation(tooltip.routes[itemIndex])}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <p className="float-end">
          <p>{props.getuser?.name}<Profileimg1 /></p>
            
          </p>
        </div>
      </div>
      <MainRouteFile/>
    </div>
  );
}

export default ClientNavbar;
