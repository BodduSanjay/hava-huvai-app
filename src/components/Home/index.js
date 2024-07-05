import { Link } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";

const Home = () => (
  <div className="col-cont">
    <Header />
    <div className="row-cont">
      <Sidebar />
      <div className="home-container">
        <h1>Go to Airport Tab</h1>
        <Link to="/airport" className="link-design">
          <button className="button-home">Go to airports</button>
        </Link>
      </div>
    </div>
  </div>
);
export default Home;
