import Nav from "./../../assets/icon/nav.svg";
import { useCustom } from "../../context/context";
const Hamburger = () => {
  const {
    state: { menu },
    dispatch,
  } = useCustom();
  const open = () => {
    dispatch({ type: "MENU", payload: true });
  };
  return (
    <>
      <img
        src={Nav}
        alt="hamburger menu"
        onClick={open}
        className="md:hidden xl:hidden lg:hidden 2xl:hidden"
      />
    </>
  );
};

export default Hamburger;
