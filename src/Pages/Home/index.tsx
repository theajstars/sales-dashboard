import Dashboard from "../Dashboard";
import Navbar from "../Navbar";
import TopNav from "../TopNav";
import "./style.scss";
export default function Home() {
  return (
    <div>
      <Navbar />
      <TopNav />
      <Dashboard />
    </div>
  );
}
