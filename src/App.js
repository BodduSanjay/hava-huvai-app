import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Airport from "./components/Airports";
import Videos from "./components/Videos";
import AirportItemDetails from "./components/AirportItemDetails";
import { AirportsProvider } from "./aiportContext";
import "./App.css";

const App = () => (
  <AirportsProvider>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/airport" element={<Airport />} />
      <Route exact path="/videos" element={<Videos />} />
      <Route exact path="/airport/:id" element={<AirportItemDetails />} />
    </Routes>
  </AirportsProvider>
);

export default App;
