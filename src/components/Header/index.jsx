import Hamburger from "./Hamburger";
import LoginBtn from "./LoginBtn";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavList from "./NavList";
import "./index.scss";
const index = () => {
  return (
    <>
      <header
        className="flex items-center w-full "
        style={{ background: "#0D263B" }}
      >
        <div className="container">
          <div className="header flex items-center justify-between w-full">
            <Hamburger />
            <Logo />
            <NavList />
            <LoginBtn />
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
