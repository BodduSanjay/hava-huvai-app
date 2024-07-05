import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import "./index.css";
import { AirportsContext } from "../../aiportContext";

const AirportRow = ({ airport }) => {
  const { removeAirportList } = useContext(AirportsContext);
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{airport.name}</td>
      <td>{airport.country}</td>
      <td>{airport.code}</td>
      <td>{airport.terminals}</td>
      <button className="edit-btn">
        <Link to={`/airport/${airport.id}`}>
          <MdEdit size={20} color="#464646" />
        </Link>
      </button>
      <button
        className="delete-btn"
        onClick={() => removeAirportList(airport.id)}
      >
        <MdDelete size={20} color="#464646" />
      </button>
    </tr>
  );
};

export default AirportRow;
