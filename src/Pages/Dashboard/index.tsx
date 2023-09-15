import { useState } from "react";

import Avatar from "../../Assets/IMG/Avatar.jpg";
import TodaySales from "../TodaySales";

import "./styles.scss";

export default function Dashboard() {
  return (
    <div className="dashboard-container flex-col">
      <div className="flex-row justify-between width-100 align-start">
        <TodaySales />
      </div>
    </div>
  );
}
