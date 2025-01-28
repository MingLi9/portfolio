import { Outlet } from "react-router-dom";
import Menu from "./menu";
import Footer from "./footer";
const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;