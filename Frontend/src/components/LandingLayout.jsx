import Navbar_Landing from "./Navbar_Landing";
import Footer_Landing from "./Footer_Landing";
import { Outlet } from "react-router-dom";

export default function LandingLayout() {
  return (
    <>
      <Navbar_Landing />
      <Outlet />
      <Footer_Landing />
    </>
  );
}
