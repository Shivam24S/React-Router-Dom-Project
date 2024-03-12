import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventPage;

export async function eventLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    console.log("data =>", resData);
    return resData.events;
  }
}
