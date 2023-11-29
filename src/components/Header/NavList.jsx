import { NavLink } from "react-router-dom";
import "./index.scss"
const NavList = () => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to={"/home"} className={"header__nav--link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/properties"} className={"header__nav--link"}>
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className={"header__nav--link"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;
