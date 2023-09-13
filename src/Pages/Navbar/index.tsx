import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/IMG/Logo.svg";
import ProLogo from "../../Assets/IMG/ProLogo.svg";
import { Routes } from "../../Lib/RouteList";

import "./styles.scss";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="container flex-col align-center justify-between">
      <div className="content flex-col width-100 justify-between">
        <div className="flex-row align-center justify-start width-100">
          {/* <img src={Logo} alt="" className="logo pointer" /> */}
          &nbsp; &nbsp;
          {/* <span className="px-20 fw-600 pointer">Sales</span> */}
        </div>
        {/* <div className="nav-items">
          {Routes.map((route, index) => {
            return (
              <Link
                key={index}
                to="/"
                onClick={() => setCurrentPage(route.label)}
                className={`item ${
                  currentPage === route.label && "item-active"
                } flex-row align-center`}
              >
                <i className={`fal fa-${route.icon} icon`}></i>
                <span className="label">{route.label}</span>
              </Link>
            );
          })}
        </div> */}
        <div className="pro flex-col align-center justify-between">
          {/* <img src={ProLogo} alt="" className="logo" /> */}
          {/* <span className="px-20 text-white">Sales Pro</span> */}
          <span className="px-12 text-white text-center">
            Get access to all features via Pro.
          </span>
          {/* <button className="flex-row pointer align-center justify-center text-purple fw-500">
            Get Pro
          </button> */}
        </div>
      </div>
    </div>
  );
}
