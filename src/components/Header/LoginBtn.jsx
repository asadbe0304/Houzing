import { Link } from "react-router-dom";
import Button from "../Ui/Button";
const LoginBtn = () => {
  return (
    <>
    <Link to={"login"}>
      <Button text={"Login"}/>
    </Link>
    </>
  );
};

export default LoginBtn;
