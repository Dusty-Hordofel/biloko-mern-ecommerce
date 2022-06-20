import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //console.log(email);
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the browser from refreshing or reloading the page
    console.table(email, password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {}
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Your email"
          value={email} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
          onChange={(e) => setEmail(e.target.value)} //onChange helps us to track the value of the input element in real-time.
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Your password"
          value={password} //we put whatever the user typing in and put that in the state by the name of email.Putting a value attribute makes the input controlled
          onChange={(e) => setPassword(e.target.value)} //onChange helps us to track the value of the input element in real-time.
        />
      </div>
      {/* <button type="submit" className="btn btn-raised">
        Login
      </button> */}
      <Button
        onClick={handleSubmit}
        type="primary"
        className="btn mb-3"
        shape="round"
        block
        size="large"
        disabled={!email || password.length < 6}
        icon={<MailOutlined />}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>

          {loginForm()}
        </div>
      </div>
    </div>
  );
};

export default Login;
