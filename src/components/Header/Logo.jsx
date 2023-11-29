import { Link } from "react-router-dom";
import Logos from "../../assets/icon/logo.svg";

const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="flex items-center justify-between gap-3 text-white"
      >
        <img src={Logos} alt="company logo" className="w-24"/>
      </Link>
    </>
  );
};

export default Logo;
