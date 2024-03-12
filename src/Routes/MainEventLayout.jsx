import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";

const MainEventLayout = () => {
  return (
    <>
      <EventNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainEventLayout;
