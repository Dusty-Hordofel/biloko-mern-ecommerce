import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/nav/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Home from "./pages/Home";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { currentUser } from "./functions/auth";
import History from "./pages/user/History";
//import UserRoute from "./components/routes/UserRoute";

const App = () => {
  const dispatch = useDispatch(); //useDispatch is used to dispatch action to the store;

  //we use useEffect to check firebase auth state
  useEffect(() => {
    //the reason for that is once we get that information we want to cleanup the state.
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      //we get the usert from the auth function
      if (user) {
        const idTokenResult = await user.getIdTokenResult(); //we get the idTokenResult from the user
        console.log("user", user);
        currentUser(idTokenResult.token) //idTokenResult.token will give us the user token and we will send it to our backend as authtoken
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              }, //these coming from our server despite idTokenResult who come from firebase, we don't want to store them in the local storage
            }); //we dispatch these informations to the store as a payload . {type: "LOGGED_IN_USER", payload: {name: res.data.name, email: res.data.email, token: idTokenResult.token, role: res.data.role, _id: res.data._id}}
          })
          .catch((error) => {
            console.log(error);
          });
        // dispatch({
        //   type: "LOGGED_IN_USER",
        //   payload: {
        //     email: user.email,
        //     token: idTokenResult.token,
        //   }, //these coming from firebase, we don't want to store them in the local storage
        // }); //we dispatch the idTokenResult to the store as a payload . {type: "LOGGED_IN_USER", payload: {email: user.email,token: idTokenResult.token,}}
      }
    }); //we use onAuthStateChanged to check if the user is logged in or not.

    //cleanup the state.
    return () => unsubscribe();
  }, []); //useEffect is used to run a piece of code when the component is mounted and unmounted.
  return (
    <div>
      <Header />
      <ToastContainer />
      {/*Toastify will we available on our entire App */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/user/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
