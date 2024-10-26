import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

export default function Layout() {
  return (
    <div className="Layout">
      <NavigationMenu />
      <Outlet />
    </div>
  );
}
