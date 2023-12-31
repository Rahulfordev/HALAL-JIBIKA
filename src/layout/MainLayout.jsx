import { Outlet } from "react-router-dom";
import { Header } from "../components/common";
import Footer from "../components/common/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="outlet-section">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
