import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import Login from "./../../../public/images/login.svg";
const LoginBtn = () => {
  return (
    <>
      <Link to={"login"}>
        <Button
          text={"Login"}
          color={"#fff"}
          border={"#fff"}
          bg={"transparent"}
          Img={Login}
        />
      </Link>
    </>
  );
};

export default LoginBtn;
