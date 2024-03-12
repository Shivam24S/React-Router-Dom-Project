import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>this is event Details Page {params.eventId}</h1>
    </div>
  );
};

export default EventDetailPage;
