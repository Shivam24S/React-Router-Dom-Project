import { Link } from "react-router-dom";

const EVENTDETAILS = [
  {
    id: "p1",
    name: "event-1",
    date: "1/1/2024",
    place: "abcd Town",
  },
  {
    id: "p2",
    name: "event-2",
    date: "1/5/2024",
    place: "csc Town",
  },
  {
    id: "p3",
    name: "event-3",
    date: "12/10/2024",
    place: "cbbb Town",
  },
  {
    id: "p4",
    name: "event-4",
    date: "16/8/2024",
    place: "csav Town",
  },
  {
    id: "p5",
    name: "event-5",
    date: "24/7/2024",
    place: "vdv Town",
  },
];

function EventPage() {
  return (
    <>
      {" "}
      <h1>Event Page</h1>
      <br />
      {EVENTDETAILS.map((events) => (
        <li key={events.id}>
          <Link to={events.id}>{events.name}</Link>
        </li>
      ))}
    </>
  );
}

export default EventPage;
