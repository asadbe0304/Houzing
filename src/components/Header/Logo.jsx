import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="flex items-center justify-between gap-3 text-white"
      >
        <ImLocation2 />
        <h2 className="text-white">Houzing</h2>
      </Link>
    </>
  );
};

export default Logo;
