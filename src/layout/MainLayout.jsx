import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
