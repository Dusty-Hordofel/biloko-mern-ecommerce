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
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          }, //these coming from firebase, we don't want to store them in the local storage
        }); //we dispatch the idTokenResult to the store as a payload . {type: "LOGGED_IN_USER", payload: {email: user.email,token: idTokenResult.token,}}
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
      </Routes>
    </div>
  );
};

export default App;
