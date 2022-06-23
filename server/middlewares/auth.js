import admin from "../firebase/index.js";

export const authCheck = async (req, res, next) => {
  //we will send the token from the frontend to the backend in the header.
  //console.log(req.headers); //we should get the token here
  //we are going to use firebase admin to validate the token et get the user information.
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken); //verifyIdToken() is a method of the admin object.it takes the token and returns the user information.
    //console.log("FIREBASE USER IN AUTHCHECK", firebaseUser);
    req.user = firebaseUser; //we are going to store the user information in the request object.we will be able to get the user information in the controller because of middleware.
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: "Invalid or expired token" }); //401 status means unauthorized
  }
};

//Notice: this way we can validate the token,get the user infomation from firebase and make it available in the request object.
