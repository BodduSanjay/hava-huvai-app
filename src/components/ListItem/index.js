import { Link } from "react-router-dom";
import "./index.css";

const ListItem = ({ each, isActive, handleItemClick }) => {
  const { id, name, path } = each;
  const clsName = isActive ? "active-style" : "normal-style";

  const handleClick = () => {
    handleItemClick(id);
  };

  return (
    <button className={clsName} onClick={handleClick}>
      <Link to={path} className="link-design-side">
        <p className="para">{name}</p>
      </Link>
    </button>
  );
};

export default ListItem;
