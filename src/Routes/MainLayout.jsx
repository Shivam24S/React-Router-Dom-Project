import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
const MainLayout = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
