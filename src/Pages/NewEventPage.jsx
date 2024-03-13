import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const newEventPage = () => {
  return <EventForm />;
};

export default newEventPage;

export async function NewEventDataSender({ request }) {
  const data = await request.formData();

  const allData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(allData),
  });

  if (!response.ok) {
    throw json({ message: "can't able to save event Data" }, { status: 500 });
  }
  return redirect("/events");
}
