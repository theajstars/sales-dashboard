import { useState } from "react";

import Logo from "../../Assets/IMG/Logo.svg";

import "./styles.scss";

export default function TopNav() {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="top-nav-container flex-row align-center justify-between">
      <span className="text-dark px-25 fw-600">Dashboard</span>
    </div>
  );
}
