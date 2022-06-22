import admin from "../firebase/index.js";

export const authCheck = async (req, res, next) => {
  //we will send the token from the frontend to the backend in the header.
  console.log(req.headers); //we should get the token here
  console.log("MOLOMOLO MOLOMOLO");
  //we are going to use firebase admin to validate the token et get the user information.
  next();
};
