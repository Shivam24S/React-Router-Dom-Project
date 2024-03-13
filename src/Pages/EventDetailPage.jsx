import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

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
