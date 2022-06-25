import { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createOrUpdateUser } from "../../functions/auth.js";

const Login = () => {
  const [email, setEmail] = useState("hordofel@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user, navigate]); //if the user is authenticated, then redirect to home page.

  const rolebasedRedirect = (res) => {
    if (res.data.role === "admin") {
      navigate("/admin/dashboard"); //navigate is a method that we can use to redirect the user to a different page.
    } else {
      navigate("/user/history");
    }
  };
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
          rolebasedRedirect(res);
        })
        .catch((error) => {
          console.log(error);
        });
      //navigate("/"); //navigate is a method that we can use to redirect the user to a different page.
      // dispatch({
      //   type: "LOGGED_IN_USER",
      //   payload: {
      //     email: user.email,
      //     token: idTokenResult.token,
      //   }, //these coming from firebase, we don't want to store them in the local storage
      // }); //we dispatch the idTokenResult to the store as a payload . {type: "LOGGED_IN_USER", payload: {email: user.email,token: idTokenResult.token,}}
      // navigate("/"); //navigate is a method that we can use to redirect the user to a different page.
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
  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
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
            rolebasedRedirect(res);
          })
          .catch((err) => {});

        // dispatch({
        //   type: "LOGGED_IN_USER",
        //   payload: {
        //     email: user.email,
        //     token: idTokenResult.token,
        //   },
        // });
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      }); //signInWithPopup is used to sign in with google account
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading....</h4>
          ) : (
            <h4>Login</h4>
          )}

          {loginForm()}
          <Button
            onClick={googleLogin}
            type="danger"
            className="btn mb-3"
            shape="round"
            block
            size="large"
            icon={<GoogleOutlined />}
          >
            Login with Google
          </Button>
          <Link to="/forgot/password" className="float-right text-danger">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
