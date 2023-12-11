import Input from "../Ui/Input";
import Button from "../Ui/Button";
import "./index.scss";

const index = () => {
  return (
    <>
      <div className="navbar w-full flex items-center justify-between">
        <div className="w-1/2">
          <Input
            placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          />
        </div>
        <div className="w-1/2">
          <Button text={"Status"} />
          <Button text={"Price"} />
          <Button text={"Advanced"} />
          <Button text={"Search"} />
        </div>
      </div>
    </>
  );
};

export default index;
