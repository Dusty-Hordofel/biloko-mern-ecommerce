    Ccourse Highlights

    I. React Client (Frontend)

    - Create React Project
        1. create biloko-mern-ecommerce folder
        2. create client folder using npx create-react-app client.
        3. run client folder using npm start after going in client folder (cd client)
        4. Clean App.js folder 

    - Install react-router
        1. install react-router-dom (npm i react-router-dom) in  client folder 

    - Routes and Pages
        1. create pages folder in src and then create Login & Register folder. 
        2. create auth folder in pages and drag and drop Login and Register
        3. fill Register & login component (rafce shortcut)
        4. create Home Page component in  pages folder
        5. adding in app.js & import {Routes,Route} from react-router-dom
        6. Wrap our app in BrowserRouter by importing it. 

    - Ant Design Navigation
        1. go to boostrap material()
        2. add this link (...) in public folder to add boostrap
        3. go to ant Design. 
        4. create folder components & nav nested folder . Add Header component and past ant Design info
        5. install ant Design (npm i @ant-design/icons) & (npm i antd)
        6. import "antd/dist/antd.variable.min.css";
    
    - Ant Design icons
        1. go to Ant Design ,and tap icons to go to icons . copy and past icons we need (Home , register,logout).
        2. useBootstrap className to organize the move icons (we have already install bootstrap material icons)
        3. in Login & Register component add className="float-right",we have to put register first if we want its works well.
        4.
    - React Router Link in Header.js
        1. import { Link } from "react-router-dom";
        2. wrapp each icon component in a react-router-dom Link


      

    II. Firebase Authentication and Redux
    - Firebase Setup
        1. go to firebase(firebase.google.com) and signIn
        2. go to the console, create project (biloko-mern-ecommerce),name it as you want
        3. deseable google analytics
        4. click on the web (</>) & register app (biloko ecommerce)
        5. create firebase.js in the root folder, install firebase (npm install firebase) & copy the code we see on firebase. 
    
    - Register Form
        - go to pages->auth->Register.jsx
        - setup the form by creating Register function

    - Email link to SignIn 
        -   add react toastify (npm i react-toastify)
        - import { auth } from "../../firebase";
        - import { toast, ToastContainer } from "react-toastify";
        - import "react-toastify/dist/ReactToastify.css";
        - add e.preventDefault  in handleSubmit function
        - add const config (see firebase doc: Email Link Authentication, ) ,https://firebase.google.com/docs/auth/web/email-link-auth
        - add firebase sendSignInLinkToEmail(https://firebase.google.com/docs/auth/web/email-link-auth) method in Email Link Authentication section.
        - go to the authentication section in firebase to active Adresse e-mail/Mot de passe methode
        - add google auth method . 
        - add Toast component in Header.jsx <ToastContainer />
        - test if it's work well trying to register an email in the input.
        - go to network and see the last element to see whats happen after clicking on register button.
        - let's verify if we got the email and click in the link provided to confirm our email.

    -  ENV and Toast Notifications
        - create .env file in the root directory. 
        - add REACT_APP_ before naming a variable , it is a requirement
        - add  const config url from Register.jsx and replace it with process.env.(env variable name we've created)
        - import toasts import to our App.js and his component. we want it to be available in our entire App. Remove toasts links from Register.jsx without removing toast .

    - Complete Registration Page
        - to make it easyer , grab all the code from register.
        - add one more field (password state)
        - we need a history object from the react router dom. 
        - Destructure the props history
        - clean the handleSubmit method.
        - add useEffect to retrieve the email from the localStorage
        -  remove autofocus from input
        - create an input field for password 

    - Complete Registration
        - add try and catch in handleSubmit method.
        - console.log(window.location.href);//to see what it is
        - console.log(window.localStorage.getItem("emailForRegistration"));//to see what it is
        - we've passed these tow function in handleSubmit Methode.  
        - handle the error in catchblock using toastify. 
        - add if statement using emailVerified method. 
        - useNavigate to redirect to the homePage

    - Setup Redux
        NB: Redux will help us to create a global state, and we need a global state for certain things. 
        The most import is getting the user information (the most importantly the user token). 

        - Using redux will make the user information accessible any where! 
        - install redux and react-redux (npm i redux react-redux redux-devtools-extension)
        - go to index.js and create the store and import the provider & composeWithDevTool
        - create a store with createStore function and insert rootReducer ans composeWithDevTools as agurments. 
        - create a reducer folder & rootReducer (to combine all reducers) function in index.js file
        - add userReducer in rootReducer function.
        - create userReducer

    - User in Redux State
        NB: Now we want to update the state with the user we get from the firebase
        - Go to App.js and use to the firebase auth function to access the currently logged user. 
        - import auth function from the firebase; 
        - dipatch action using useDispatch from "react-redux". 
        - add useEffect to check firebase auth state
        - create unsubscribe const and use onAuthStateChanged method from firebase
        - create if statement to check if user is logged.
        - dispatch action to the store dispatch({type: x, payload: x})
        NB: we don't have store information in the localStorage, firebase stores everything for us.
    
    - User Logout
        1. go to the Header component 
        2. import firebase from "firebase/compat/app";
        3. to to dropdown menu,copy one children. remove key, add icon and className.
        4. add OnClick handler to Logout user using firebase method, add & create logout method. 
        5. import useDispatch hook to update the state adding dispatch method in logout function     dispatch({type: "LOGGED_OUT_USER",payload: null,});
        6. redirect user in login page fater logout.
        7. Change the logout icon

    - Login Page 
        1. 
    



    






    





    III. Node MongoDB API (Backend)

    IV. Firebase Auth Check (Server side)

    V. User Admin and Protected Routes

    VI. Categories CRUD

    VII. Sub Categories CRUD

    VIII. Creating Products with Categories and Sub Categories (Advance)

    IX. Multiple Image Uploads with Client Side Resize

    X. Update and Delete Products (Advance)

    XI. Displaying Products Pagination and Carousel

    XII. Star Rating System

    XIII. Products based on Categories and Sub Categories

    XIV. Advance Searching and Filtering (9 Different Ways)

    XV. Add to Cart

    XVI. Checkout

    XVII. Coupon

    XVIII. Payment with Stripe

    XIX. Orders

    XX. User Dashboard (Purchase History)

    XXI. PDF/Invoice Download

    XXII. Admin Dashboard (Order Management)

   XXIII. Wishlist

    XXIV. Cash On Delivery (Cashless order)

    XXV. Deployment to Digital Ocean Cloud