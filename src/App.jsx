import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Routes/MainLayout";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import EventDetailPage from "./Pages/EventDetailPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import MainEventLayout from "./Routes/MainEventLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <MainEventLayout />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                //
              } else {
                const resData = await response.json();
                console.log("data =>", resData);
                return resData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
