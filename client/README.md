
Course Highlights

React Client (Frontend)

Firebase Authentication and Redux

Node MongoDB API (Backend)

Firebase Auth Check (Server side)

User Admin and Protected Routes

Categories CRUD

Sub Categories CRUD

Creating Products with Categories and Sub Categories (Advance)

Multiple Image Uploads with Client Side Resize

Update and Delete Products (Advance)

Displaying Products Pagination and Carousel

Star Rating System

Products based on Categories and Sub Categories

Advance Searching and Filtering (9 Different Ways)

Add to Cart

Checkout

Coupon

Payment with Stripe

Orders

User Dashboard (Purchase History)

PDF/Invoice Download

Admin Dashboard (Order Management)

Wishlist

Cash On Delivery (Cashless order)

Deployment to Digital Ocean Cloud



Project Overview

Master MERN Stack Web Development building Ultimate E-commerce app with React Redux Ant Design Firebase NodeJs and MongoDB. This project will have almost all the features you want to add in any E-commerce app including:

Login Registration System

Login with email/password and social login (Google)

Admin dashboard and order management system

Products CRUD with advance features including categories, sub-categories, multiple image uploads etc

Plenty of advance searching and filtering options

Star rating system

Cart functionality with both backend/frontend implementation

Checkout with stripe for credit card payments

Checkout with cash on delivery (no online payment required)

User dashboard with password update, purchase history, Invoice/PDF download etc

Deployment to digital ocean cloud

Please go through the curriculum to get better understanding of the project

This course project is probably the biggest and most exciting project you have build so far. It is packed with hundreds of tips and tricks that can help you build almost any type of full stack app (not limited to ecommerce).

Master the art of building FullStack/MERN Stack apps by enrolling into this course and never look back. What you are now and what you will become after completing this course is going to be a ground breaking step in your web development career.

You can build the biggest and most complex apps of your dream or as required at your job. Master the stack of all stacks and become the most productive and innovative developer of your team. I welcome you to be a part of this incredible journey.

Ce que vous allez apprendre
Learn to build one of the biggest ecommerce app ever
Hundreds of tips and tricks to build full stack app
Gain the skill for building any type of app (not limited to ecommerce)
Master the art of building frontend app with react and redux
Master the art of building backend api with nodejs
Master the art of building lightning fast full stack / mern stack apps
Integrate firebase for handling authentication
Learn to perform simple to complex mongodb queries using mongoose
Learn ant design (the most popular react UI library)
Stunning layout with bootstrap material css
Complete authentication with social login
Password forgot/reset, confirmation email on signup etc
Integrate redux for global state management
Role based access control for users and admin
Advance CRUD (create read update delete) for products, categories and sub categories
Multiple Image Uploads with Client Side Resize
Pagination
Advance searching and filtering (9 different ways)
Star rating system
Add to cart
Discount coupon code
Credit card payment with stripe
Cash on delivery (no online payment required)
Order management system for admin
Admin dashboard to manage and run ecommerce platform
Add to wishlist
Code splitting
Deployment
Y a-t-il des exigences ou prérequis pour ce cours ?
Good understanding of javascript
Previous experience of building apps using react and node
À qui ce cours s'adresse-t-il ?
Javascript developers of all level
Anyone interested in building real world ecommerce app
Anyone interested in learning full stack / mern stack development
Anyone who enjoys learning by building meaningful real projects (not toy projects)
Anyone interested in learning hundred's of tips and tricks, all within one course
Anyone with ambition to build the next big thing by mastering full stack development
Anyone who likes to write code that is clean and easy to understand (even for complex features)
Anyone who is up for a challenge

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

    23. User in Redux State
        NB: Now we want to update the state with the user we get from the firebase
        - Go to App.js and use to the firebase auth function to access the currently logged user. 
        - import auth function from the firebase; 
        - dipatch action using useDispatch from "react-redux". 
        - add useEffect to check firebase auth state
        - create unsubscribe const and use onAuthStateChanged method from firebase
        - create if statement to check if user is logged.
        - dispatch action to the store dispatch({type: x, payload: x})
        NB: we don't have store information in the localStorage, firebase stores everything for us.
    
    24. User Logout
        1. go to the Header component 
        2. import firebase from "firebase/compat/app";
        3. to to dropdown menu,copy one children. remove key, add icon and className.
        4. add OnClick handler to Logout user using firebase method, add & create logout method. 
        5. import useDispatch hook to update the state adding dispatch method in logout function     dispatch({type: "LOGGED_OUT_USER",payload: null,});
        6. redirect user in login page fater logout.
        7. Change the logout icon

    25. Login Page 
        1. go to register component add placeholder "Your email" and a line break in the email input.
        2. copy Register component code and paste it in Login page.
        3. let's add password state & password input
        4. clean handleSubmit function
        5. put each div in form-group div 
        6. make a request to firebase in handleSubmit function after, before console.table(email,password) to see what we submit in to firebase.
        7. go to Ant design , component->button 
        8. import antd Button and MailOutlined icon in Login Page and add them.
        9. remove button and replace him with Ant Design Button.    
        10.Personnalise Button 
    
    26. Signin with Email and Password
        1. add try and catch to log the user with firebase
        2. use auth function & signInWithEmailAndPassword method to login
        3.test logique with console.log(...) 
        4. import useDispatch from  react-redux
        5. add result , destructure the user and idTokenResult
        6. disptch action 
        7. redirect the user to the home page.  
        8. test the script  
        9. add loading state ,setLoading to true in handleSubmit and false in catch block.
    
    23. Login with Google
        1. add conditionnal rendering in Login Page 
        2. Add Google Button. 
        3. create googleLogin function
        4. add auth.signInWithPopup(googleAuthProvider)
        5. then handle response with then and catch.
        6. test the script. 

    24. Conditional Rendering
        1. Go to Header.jsx
        2. use useSelector hook to know if user is conected or not. it's helps us to get the data from the state!
        3. add conditionnal rendering to display or not Register & login
        4. display Logout if we have a user
        5. test the script
        6. Replace username title by the first part of email user.

    25. Forgot Password.  
        1. go to login Page & create a link below the boutton
        2. create ForgotPassword Page & inport all element from login to make things easier
        3. add email & loading state
        4. add a div in our compenent & add it in app.js
        5. add a conditionnal rendering
        6. add a form element & add handleSubmit event handler
        7. go to submit function and fill it . 
    
    26. Redirect Logged in User
        1. Let's grab the user from the state with useSelector
        2. add useEffect
        3. go to login and add the same useEffect to redirect user
        4. add useEffect, useSelector (to grap the user) and redirect
        5. let's do the same with register


    III. Node MongoDB API (Backend)
    27. Backend API with Node and MongoDB
    28. NPM Packages to install
        1. create server folder and install npm init -y   
        2. npm i express mongoose cors morgan express-jwt firebase-admin jsonwebtoken nodemon dotenv
        

    xx. Mongoose version
    xx. Mongo Atlas or local installation 
    29. Server Setup.
        1. create .env file & put MONGO_URL.    
        2. add a variable named PORT. 
        3. create .gitignore file & add file || folder name we don't wan to push in github.     
        4. create server.js file & go to package.json & add "type":"module". 
        5. go to server.js
        6. import express from "express" in server.js ... mongoose,morgan,cors & dotenv
        7. create const app ,connect db with mongoose & listen server
        8. add a middleware section and add morgane-express.json & cors() in it.
        9. add route section and test our route
        10. go to package.json and add a script in script section ("start":"nodemon server.js") 
        11. define the port constant to connect to the server
        12. listen the server with app.listen
        13. test if we are connected to server & our database. tap npm start in the terminal
    
    30. Routes. 
        1. create routes and auth.js file. 
        2. import express,create const router and export it by default
        3. cut the app.get route in server.js and past it in auth.js route
        4. import routes from auth.js & add app.use(url, router);

    31. Routes Autoloading
        1. import fs from "fs" in server.js.  
        2. 

    32. Controllers.
        1. create controllers folders
        2.  create    
    33. User Schema. 
        1. create models folder. 
        2. import mongoose from "mongoose";
        3. const { ObjectId } = mongoose.Schema;
        4. create a userSchema
        5. add a timestamps argument
        5. export UserSchema

    IV. Firebase Auth Check (Server side)
    34. Firebase Admin
        1.install firebase admin 
        2.go to firebase console to get the firebase service account key to process further. 
        3. click on project overview->project settings->service account
        4. To use firebase admin we need to generate a new key and use the code we see (before to generate a key) to get firebase admin. 
        5. download and save the file in a new root config folder
        6. create another in root folder named firebase, create index.js file inside & paste the Extrait de configuration Admin SDK.
        7. update the path of serviceAccount in index.js file . 
    
    35. Middleware
        NB: Now we can start using firebase admin tool to validate the token. So when our front-end send the user token to our backend, we will received that in ou auth route.
        1. change your get to post method (route->auth.js)
        2. to grab that token or verify the middleware & verify the token we can write another middleware function. 
        3. in the middle we have to made some check to verify the token is valide. 
        4. in The Middle make sure you get the token and this is valide. 
        5. create a middlewares folder in the root, add auth.js file. 
            - import admin from firebase/index.js file
            - create authCheck function
            - check if the token is valid with firebase admin & get the user information  
            - use this function as middleware in routes->auth.js 
    
    36. Auth Check Middleware
        NB: In this part wa are trying to send the user token from the frontend to the endpoint ("/test"). 
        1. go to client->env
            - add a new variable REACT_APP_API 
            - you can also add proxy in package.json if you want . 
        2. go to login page
            NB: use axios to make a http request to send our token to the backend.Make sure backend and frontend are runing
            - npm i axios & import that
            - execute a function that will make a request to our backend
            - create an async funtion named createOrUpdateUser
            - use axios & hhtp request
            - add the url , leave the body empty because we dont send any request in the body (like create a product...) just in the token in the headers(headers{}).
            - give this token a name (headers{authtoken:paramter}) and pass the token to this function(authtoken). headersheaders{authtoken:authtoken}
        
            - Pass the token to the function we've created 
            -  go to login function, add createOrUpdateUser and pass it the token. 
            NB: when we get the token in Login function , we execute createOrUpdateUser
            - add promises and handle the error. 
            - test the script 
            NB: we will see the authtoken in network and in console


    V. User Admin and Protected Routes
    37. Create or Update User
        1. go to auth.js middleware 
            - add try and catch
            - in try instruction:
                -  create firebaseUser const 
                - use admin.auth().verifiIdToken to return user info from headers.we verify the token this way
            - catch:
                - log error
                - use an appropriate status code
            - create a request to store user information
        2. go ahead and use this information to save the user in our database
            NB: we can access the requested user in our controller
        3. go to the controller auth.js
            - replace testuser name by createOrUpdateUser
            - import user models
            - destructure req.user information came from the authCheck middleware.
            NB: if user already exists, we will update the user.if it doesn't exist in the database we create. 
            -  create const user & use findOneAndUpdate methode
            -  add if statement to verify if user exist or not
            












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