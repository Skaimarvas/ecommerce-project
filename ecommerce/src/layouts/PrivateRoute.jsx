import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function PrivateRoute(props) {
  const location = useLocation();
  const { component: Component } = props;
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      render={() =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: location.pathname } }}
          />
        )
      }
    />
  );
}
