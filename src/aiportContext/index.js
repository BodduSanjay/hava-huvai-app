import React, { useState, createContext } from "react";

const AirportsContext = createContext();

const AirportsProvider = ({ children }) => {
  const [airports, setAirports] = useState([
    {
      id: 1,
      name: "Indra Gandhi International Airport",
      country: "India",
      code: "DEL",
      terminals: 3,
    },
    {
      id: 2,
      name: "Dubai International Airport",
      country: "UAE",
      code: "DXB",
      terminals: 5,
    },
    {
      id: 3,
      name: "Heathrow Airport",
      country: "England",
      code: "LHR",
      terminals: 6,
    },
    {
      id: 4,
      name: "Istanbul Airport",
      country: "Turkey",
      code: "IST",
      terminals: 3,
    },
    {
      id: 5,
      name: "Rajiv Gandhi International Airport",
      country: "Texas",
      code: "DFW",
      terminals: 14,
    },
  ]);

  const addAirportList = (newAirport) => {
    setAirports([...airports, newAirport]);
  };

  const removeAirportList = (id) => {
    setAirports(airports.filter((airport) => airport.id !== id));
  };

  return (
    <AirportsContext.Provider
      value={{ airports, addAirportList, removeAirportList }}
    >
      {children}
    </AirportsContext.Provider>
  );
};

export { AirportsProvider, AirportsContext };
