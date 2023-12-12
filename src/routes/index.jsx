import { Header, Navbar } from "../components";
import { Login, Main, Contact, Properties } from "../pages";
import { Route, Routes } from "react-router-dom";

const index = () => {
  return (
    <>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
};

export default index;
