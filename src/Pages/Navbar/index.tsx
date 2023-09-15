import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/IMG/Logo.svg";
import ProLogo from "../../Assets/IMG/ProLogo.svg";
import { Routes } from "../../Lib/RouteList";
import { motion } from "framer-motion";
import "./styles.scss";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>("");
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  return (
    <motion.div
      className="nav-container flex-col align-center justify-between"
      initial={false}
      animate={{
        left: isNavOpen ? 0 : "-400px",
      }}
    >
      <motion.span
        initial={false}
        animate={{
          left: isNavOpen ? 20 : 20,
        }}
        className="toggle pointer text-dark px-20"
        onClick={() => {
          setNavOpen(!isNavOpen);
        }}
      >
        <i className={`fal fa-${isNavOpen ? "times" : "bars"}`} />
      </motion.span>
      <div className="content flex-col justify-between">
        <div className="flex-row align-center justify-start width-100">
          &nbsp;
          <img src={Logo} alt="" className="logo pointer" />
          &nbsp; &nbsp;
          <span className="px-20 fw-600 pointer">Sales</span>
        </div>
        <div className="nav-items flex-col justify-between">
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
        </div>
        <div className="pro flex-col align-center justify-between">
          <img src={ProLogo} alt="" className="logo" />
          <span className="px-20 text-white">Sales Pro</span>
          <span className="px-12 text-white text-center">
            Get access to all features via Pro.
          </span>
          <button className="flex-row pointer align-center justify-center text-purple fw-500">
            Get Pro
          </button>
        </div>
      </div>
    </motion.div>
  );
}
