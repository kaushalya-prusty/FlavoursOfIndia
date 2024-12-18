import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex items-center justify-between border border-slate-400 shadow-lg ">
      <div className="logoContainer">
        <img className="w-20 px-3" src={LOGO_URL}></img>
      </div>
      <div>
        <h1 className="font-extrabold text-3xl text-center">
          Flavours Of India!
        </h1>
      </div>
      <div className="">
        <ul className="flex px-2">
          <li className="px-3 text-lg font-medium">
            Status: {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-3 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 text-lg font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 text-lg font-medium">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 text-lg font-medium">Cart</li>
          <button
            className="px-3 text-lg font-medium "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
