import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
const MainLayout = () => {
  // if you want to show transition of component in different state
  // note you have to use this not where we loading instead another component like they render
  // const navigation = useNavigation();

  return (
    <div>
      <MainNavigation />
      {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
