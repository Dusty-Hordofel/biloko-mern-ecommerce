import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth.js";

//we can destructure the history, our entire application is wrap by the browser router, so it will give us the props history
const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    //console.log(setEmail);
    // console.log(window.location.href); //window.location.href is the url of the current page
    // console.log(window.localStorage.getItem("emailForRegistration")); //window.localStorage.getItem("emailForRegistration") is used to retrieve email from localStorage
  }, []);

  //console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the browser from refreshing or reloading the page

    //validation
    if (!email || !password) {
      toast.error("Email and Password are required");
      return; //return is used to stop the execution of the code below
    }

    if (email.length < 6) {
      toast.error("Password must be at least 6 characters");
      return; //we use return to stop the execution of the code below
    }

    try {
      //try to sign the user with the email link
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //console.log(result);
      if (result.user.emailVerified) {
        //remove user email from local storage
        window.localStorage.removeItem("emailForRegistration"); //we use removeItem to remove any item from localStorage
        //get user id token
        let user = auth.currentUser; //With firebase, we can get the current user by calling the auth.currentUser method.we don't have to save the user in the localStorage with firebase because it gives us the currently logged user.
        await user.updatePassword(password); //we use the updatePassword method to update the password of the user.it takes two arguments, the password and the onComplete callback.it's a firebase method. we take this password from the state.
        const idTokenResult = await user.getIdTokenResult(); //we use the getIdTokenResult method to get the idTokenResult.
        console.log("user", user, "idTokenResult", idTokenResult);
        //redux store
        //we use redux here because we need to access the token in many different pages.
        createOrUpdateUser(idTokenResult.token) //idTokenResult.token will give us the user token and we will send it to our backend as authtoken
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
        //redirect to home page
        navigate("/"); //navigate is a method that we can use to redirect the user to a different page.
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = (e) => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
        disabled
      />
      <input
        type="password"
        className="form-control"
        value={password} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
        onChange={(e) => setPassword(e.target.value)} //onChange helps us to track the value of the input element in real-time.
        placeholder="Password"
        autoFocus
      />
      <br />
      {/*  */}
      <button type="submit" className="btn btn-raised">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>

          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};
export default RegisterComplete;
