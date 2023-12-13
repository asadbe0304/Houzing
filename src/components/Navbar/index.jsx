import Input from "../Ui/Input";
import Button from "../Ui/Button";
import "./index.scss";
import Settings from "./../../../public/images/setting.svg";
import Key from "./../../../public/images/key.svg";
import Price from "./../../../public/images/price.svg";
import Loupe from "./../../../public/images/loupe.svg";

const index = () => {
  return (
    <>
      <div className="w-full">
        <div className="container">
          <div className="navbar 2xl:flex-row flex-col xl:flex-row lg:flow-row md:flex-col mt-3 gap-2 w-full flex items-center justify-between">
            <div className=" w-full md:w-full first-letter: sm:w-full  xl:w-1/2 lg:w-full 2xl:w-1/2">
              <Input
                type={"search"}
                placeholder={
                  "Enter an address, neighborhood, city, or ZIP code"
                }
              />
            </div>
            <div className="w-full  sm:w-full sm:flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap flex-wrap xl:w-1/2 lg:w-full 2xl:w-1/2 flex  items-center justify-start md:justify-between lg:justify-between xl:justify-between 2xl:justify-between sm:justify-between gap-1">
              <Button
                text={"Status"}
                color={"#000"}
                border={"#E6E9EC"}
                bg={"white"}
                Img={Key}
              />
              <Button
                text={"Price"}
                color={"#000"}
                border={"#E6E9EC"}
                bg={"white"}
                Img={Price}
              />
              <Button
                text={"Advanced"}
                color={"#000"}
                border={"#E6E9EC"}
                bg={"white"}
                Img={Settings}
              />
              <Button
                text={"Search"}
                color={"#fff"}
                border={"#0061Df"}
                bg={"#0061Df"}
                Img={Loupe}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
