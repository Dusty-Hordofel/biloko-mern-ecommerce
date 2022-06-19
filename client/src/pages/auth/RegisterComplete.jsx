import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

//we can destructure the history, our entire application is wrap by the browser router, so it will give us the props history
const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useState(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    console.log(setEmail);
  }, []);
  //   useEffect(() => {
  //     const email = window.localStorage.getItem("emailForRegistration");
  //     console.log(email);
  //   }, []);

  //console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the browser from refreshing or reloading the page
  }; //this function will run when the button will be submitted;

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
