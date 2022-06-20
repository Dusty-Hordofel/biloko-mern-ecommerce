import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("hordofel@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();
  const navigate = useNavigate();

  //console.log(email);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault(); //to prevent the browser from refreshing or reloading the page
    //console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password); //signInWithEmailAndPassword is used to sign in with email and password;
      //console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult(); //getIdTokenResult is used to get the idTokenResult
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        }, //these coming from firebase, we don't want to store them in the local storage
      }); //we dispatch the idTokenResult to the store as a payload . {type: "LOGGED_IN_USER", payload: {email: user.email,token: idTokenResult.token,}}
      navigate("/"); //navigate is a method that we can use to redirect the user to a different page.
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
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
