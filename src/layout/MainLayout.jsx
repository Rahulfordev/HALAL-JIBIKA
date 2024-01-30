import { Outlet } from "react-router-dom";
import { Header } from "../components/common";
import Footer from "../pages/Footer/Footer";
import "./MainLayout.css";
import { useState } from "react";

const MainLayout = () => {
  const [isShow, setIsShow] = useState(false);
  const myfuc = (e) => {
    if (!e.target.classList.contains("navIcon")) {
      setIsShow(false);
    }
  };
  return (
    <div className="main-layout" onClick={myfuc}>
      <Header isShow={isShow} setIsShow={setIsShow} />
      <div className="outlet-section">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
