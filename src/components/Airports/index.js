import { useContext } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { AirportsContext } from "../../aiportContext";
import Header from "../Header";
import Sidebar from "../Sidebar";
import AirportRow from "../AirportRow";
import "./index.css";

const Airport = () => {
  const { airports } = useContext(AirportsContext);
  return (
    <div className="col-cont">
      <Header />
      <div className="row-cont">
        <Sidebar />
        <div className="airport-bg-container">
          <div className="heading-btn-cont">
            <h2 className="heading-airports">Airports</h2>
            <button className="add-new-btn">+ Add New</button>
          </div>
          <div className="airport-table">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>
                    All Airports{" "}
                    <span>
                      <IoMdArrowDown size={20} color="#6D6D6D" />
                    </span>
                  </th>
                  <th>Country</th>
                  <th>Code</th>
                  <th>Terminals</th>
                </tr>
              </thead>
              <tbody>
                {airports.map((airport) => (
                  <AirportRow key={airport.id} airport={airport} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Airport;
