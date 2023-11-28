import { Login, Main, Contact, Sign } from "../pages";
import { Route, Routes } from "react-router-dom";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default index;
