import { Link, NavLink } from "react-router-dom";
import { MdClose, MdFacebook, MdMessage } from "react-icons/md";
import { useCustom } from "../../context/context";

const MobileMenu = () => {
  const {
    state: { menu },
    dispatch,
  } = useCustom();
  const hides = () => {
    dispatch({ type: "MENU", payload: false });
  };
  return (
    <>
      <div
        className={`${
          menu ? "show" : "hide"
        } mobile w-full fixed h-full items-center flex-col justify-center top-0 left-0 z-10 bg-white`}
      >
        <MdClose
          className="absolute top-5 left-5 z-10 w-8 h-8"
          onClick={hides}
        />
        <ul className="flex flex-col w-full h-full items-center justify-center">
          <li>
            <NavLink to={"/home"} className={"header__nav"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/properties"} className={"header__nav"}>
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={"header__nav"}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="socials mb-20 flex flow-row items-center justify-center gap-3">
          <Link>
            <MdFacebook className="w-8 h-8" />
          </Link>
          <Link>
            <MdFacebook className="w-8 h-8" />
          </Link>
          <Link>
            <MdMessage className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
