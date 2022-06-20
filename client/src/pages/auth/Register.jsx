import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");

  //console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the browser from refreshing or reloading the page
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL, //our app is running is this localhost:3001 & /register is the endpoint
      handleCodeInApp: true,
    }; //from the documentation , see Email Link Authentication

    //firebase method
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email); //localStorage is the property of the window object. To save somthing in localStorage, we use the setItem method and we pass two arguments, the key and the value. getItem is used to retrieve the value of a key.
    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="Your email"
        value={email} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
        onChange={(e) => setEmail(e.target.value)} //onChange helps us to track the value of the input element in real-time.
        autoFocus
      />
      <br />
      {/*  */}

      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>

          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
