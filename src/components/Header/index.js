import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link-design">
      <img
        src="https://res.cloudinary.com/dnm4q4bgp/image/upload/v1720152573/plyr9tot2nt5envgq2de.png"
        className="logo-img"
        alt="logo"
      />
    </Link>
    <img
      src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__"
      className="profile-img"
      alt="prifile"
    />
  </div>
);
export default Header;
