import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Routes/MainLayout";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import EventDetailPage from "./Pages/EventDetailPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import MainEventLayout from "./Routes/MainEventLayout";
import { eventLoader } from "./Pages/EventPage";

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
            loader: eventLoader,
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
