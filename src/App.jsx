import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Routes/MainLayout";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import EventDetailPage, {
  DeleteEvent,
  EventDetailPageLoader,
} from "./Pages/EventDetailPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import MainEventLayout from "./Routes/MainEventLayout";
import { eventLoader } from "./Pages/EventPage";
import ErrorPage from "./Pages/ErrorPage";
import { FormDataSenderAndUpdater } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
          {
            path: ":eventId",
            id: "event-details",
            loader: EventDetailPageLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                loader: EventDetailPageLoader,
                action: DeleteEvent,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: FormDataSenderAndUpdater,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: FormDataSenderAndUpdater,
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
