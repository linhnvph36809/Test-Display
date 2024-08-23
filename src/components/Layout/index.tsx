import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
const Layout = () => {
  return (
    <>
      <div>
        <HeaderComponent />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
