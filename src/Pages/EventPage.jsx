// import { useLoaderData, json } from "react-router-dom";

// import EventsList from "../components/EventsList";

// function EventPage() {
//   const data = useLoaderData();
//   const events = data.events;

//   // handling error
//   // if (data.isError) {
//   //   return (
//   //     <>
//   //       <p>{data.message}</p>
//   //     </>
//   //   );
//   // }

//   return (
//     <>
//       <EventsList events={events} />
//     </>
//   );
// }

// export default EventPage;

// // this is browser code it will run client side you can use anything but you cant use react hook inside
// export async function eventLoader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     // i can  handle error like this
//     // return { isError: true, message: "can't able fetch Data" };
//     // or error element can also be shown if not in that element it can show parent error elements
//     // another approach
//     // throw new Response(JSON.stringify({ message: "failed to fetch Data" }), {
//     //   status: 500,
//     // });
//     // another good way approach provided by react-router-dom
//     throw json({ message: "failed to fetch Data" }, { status: 500 });
//   } else {
//     // const resData = await response.json();
//     // return resData.events;

//     // here i can retrieve data using this method also
//     return response;
//   }
// }

// now loading Data using defer method using defer we render page component which not depend
// on datafetching so this is improve user experience after data fetching it will load all components

import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventPage() {
  const { events } = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={events}>
          {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventPage;

export async function dataFetching() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "failed to fetch Data" }, { status: 500 });
  } else {
    // if we using defer we have to convert in json format
    const resData = await response.json();
    return resData.events;
  }
}

export function eventLoader() {
  return defer({
    events: dataFetching(),
  });
}
