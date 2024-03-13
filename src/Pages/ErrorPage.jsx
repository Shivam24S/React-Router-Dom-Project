import ErrorPageContent from "../components/ErrorPageContent";

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "something went wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Page not Found";
    message = "The requested page does not exist";
  }

  return (
    <>
      <ErrorPageContent title={title}>
        <p>{message}</p>
      </ErrorPageContent>
    </>
  );
};

export default ErrorPage;
