import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../../functions/auth";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      currentAdmin(user.token) /* we create this end Point to the backend*/
        .then((res) => {
          console.log("CURRENT ADMIN RES", res); //we get the response only if the user is an admin
          setOk(true);
        })
        .catch((err) => {
          console.log("ADMIN ROUTE ERR", err);
          setOk(false);
        });
    }
  }, [user]);

  return ok ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default AdminRoute;
