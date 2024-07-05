import { useState } from "react";
import { MdHome } from "react-icons/md";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ListItem from "../ListItem";
import "./index.css";

const servicesItemsList = [
  {
    id: 1,
    name: "Airports",
    path: "/airport",
  },
  {
    id: 2,
    name: "Vidoes",
    path: "/videos",
  },
];

const otherItemList = [
  {
    id: 3,
    name: "List 1",
    path: "/airport",
  },
  {
    id: 4,
    name: "List 2",
    path: "/airport",
  },
  {
    id: 5,
    name: "List 3",
    path: "/airport",
  },
];

const Sidebar = () => {
  const [activeId, setActiveId] = useState("");

  const handleItemClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="side-nav-cont">
      <ul className="ul-cont">
        <li className="list-item">
          <Link to="/" className="link-design-home">
            <MdHome size={25} color="#464646" />
            <p className="para-home">Home</p>
          </Link>
        </li>
        <li className="list-item">
          <IoAppsSharp size={19} />
          <p className="para-home">Dashboard</p>
        </li>
      </ul>
      <ul className="ul-cont">
        <h4>Services</h4>
        {servicesItemsList.map((each) => {
          return (
            <ListItem
              key={each.id}
              each={each}
              isActive={activeId === each.id}
              handleItemClick={handleItemClick}
            />
          );
        })}
      </ul>
      <ul className="ul-cont">
        <h4>Others</h4>
        {otherItemList.map((each) => {
          return (
            <ListItem
              key={each.id}
              each={each}
              isActive={activeId === each.id}
              handleItemClick={handleItemClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
