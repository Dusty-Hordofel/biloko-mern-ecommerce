import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/nav/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import SideDrawer from './components/drawer/SideDrawer';

import RegisterComplete from './pages/auth/RegisterComplete';
import Home from './pages/Home';
import ForgotPassword from './pages/auth/ForgotPassword';
import History from './pages/user/History';
import Wishlist from './pages/user/Wishlist';
import Password from './pages/user/Password';
//import UserRoute from "./components/routes/UserRoute";
//import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from './pages/admin/AdminDashboard';
import CategoryCreate from './pages/admin/category/CategoryCreate';
import CategoryUpdate from './pages/admin/category/CategoryUpdate';
import SubCreate from './pages/admin/sub/SubCreate';

import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';
import SubUpdate from './pages/admin/sub/SubUpdate';
import ProductCreate from './pages/admin/product/ProductCreate';
import AllProducts from './pages/admin/product/AllProducts';
import ProductUpdate from './pages/admin/product/ProductUpdate';
import Product from './pages/Product';
import CategoryHome from './pages/category/CategoryHome';
import CreateCouponPage from './pages/admin/coupon/CreateCouponPage';
import SubHome from './pages/sub/SubHome';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  const dispatch = useDispatch(); //useDispatch is used to dispatch action to the store;

  //we use useEffect to check firebase auth state
  useEffect(() => {
    //the reason for that is once we get that information we want to cleanup the state.
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      //we get the usert from the auth function
      if (user) {
        const idTokenResult = await user.getIdTokenResult(); //we get the idTokenResult from the user
        console.log('user', user._delegate.accessToken);
        currentUser(idTokenResult.token) //idTokenResult.token will give us the user token and we will send it to our backend as authtoken
          .then((res) => {
            dispatch({
              type: 'LOGGED_IN_USER',
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
  }, [dispatch]); //useEffect is used to run a piece of code when the component is mounted and unmounted.
  return (
    <div>
      <Header />
      <SideDrawer />
      <ToastContainer />
      {/*Toastify will we available on our entire App */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/complete" element={<RegisterComplete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot/password" element={<ForgotPassword />} />
        <Route path="/user/history" element={<History />} />
        <Route path="/user/password" element={<Password />} />
        <Route path="/user/wishlist" element={<Wishlist />} />
        {/* <UserRoute path="/user/wishlist" element={<Wishlist />} /> */}
        {/* <UserRoute exact path="/user/history" component={History} />
        <UserRoute exact path="/user/password" component={Password} />
        <UserRoute exact path="/user/wishlist" component={Wishlist} />
        <UserRoute exact path="/checkout" component={Checkout} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" element={CategoryCreate} /> */}
        {/* <AdminRoute
          exact
          path="/admin/category/:slug"
          component={CategoryUpdate}
        /> */}
        {/* <AdminRoute exact path="/admin/sub" component={SubCreate} /> */}
        {/* <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate} /> */}
        {/* <AdminRoute exact path="/admin/product" component={ProductCreate} /> */}
        {/* <AdminRoute exact path="/admin/products" component={AllProducts} /> */}
        {/* // <AdminRoute exact path="/admin/coupon" component={CreateCouponPage} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/category" element={<CategoryCreate />} />
        {/*/:slug , slug plugin grab this part from the url */}
        <Route path="/admin/category/:slug" element={<CategoryUpdate />} />

        <Route path="/admin/sub" element={<SubCreate />} />
        <Route path="/admin/sub/:slug" element={<SubUpdate />} />
        <Route path="/admin/product" element={<ProductCreate />} />
        <Route path="/admin/products" element={<AllProducts />} />
        <Route path="/admin/product/:slug" element={<ProductUpdate />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/category/:slug" element={<CategoryHome />} />
        <Route path="/sub/:slug" element={<SubHome />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/coupon" element={<CreateCouponPage />} />
      </Routes>
    </div>
  );
};

export default App;
