import React from "react";
import { useRouteError } from "react-router";

//React router gives default error page for errors in path
// we can also create our customised error page like below
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong...🐞🐞🐞🐞🐞</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
