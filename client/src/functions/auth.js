import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/auth/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/auth/current-user`, //we send the token to current-user endpoint.
    {},
    {
      headers: {
        authtoken, //we send the authtoken to the headers.
      },
    }
  );
};
