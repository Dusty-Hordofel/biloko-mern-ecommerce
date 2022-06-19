import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");

  //console.log(email);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
        onChange={(e) => setEmail(e.target.value)} //onChange helps us to track the value of the input element in real-time.
        autoFocus
      />
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
