import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const data = useLoaderData();

  // now we are sharing loader data in two element to use the data react -route provide
  // another hook useRouteLoaderData to load data using id we have to add id in our browser route
  const data = useRouteLoaderData("event-details");

  return (
    <div>
      <EventItem event={data.event} />
    </div>
  );
};

export default EventDetailPage;

export async function EventDetailPageLoader({ params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Can't  able  find event Details for this event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function DeleteEvent({ params }) {
  const id = params.eventId;
  console.log(id);

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "failed to Delete event Data" }, { status: 500 });
  }
  return redirect("/");
}
