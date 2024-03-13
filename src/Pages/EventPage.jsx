import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventPage() {
  const data = useLoaderData();
  const events = data.events;

  // handling error
  // if (data.isError) {
  //   return (
  //     <>
  //       <p>{data.message}</p>
  //     </>
  //   );
  // }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventPage;

// this is browser code it will run client side you can use anything but you cant use react hook inside
export async function eventLoader() {
  const response = await fetch("http://localhost:8080/eventscc");

  if (!response.ok) {
    // i can  handle error like this
    // return { isError: true, message: "can't able fetch Data" };
    // or error element can also be shown if not in that element it can show parent error elements
    // another approach
    // throw new Response(JSON.stringify({ message: "failed to fetch Data" }), {
    //   status: 500,
    // });
    // another good way approach provided by react-router-dom
    throw json({ message: "failed to fetch Data" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;

    // here i can retrieve data using this method also
    return response;
  }
}
