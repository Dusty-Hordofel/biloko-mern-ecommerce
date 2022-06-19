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
        - go to firebase(firebase.google.com) and signIn
        - go to the console, create project (biloko-mern-ecommerce),name it as you want
        - deseable google analytics
        - click on the web (</>) & register app (biloko ecommerce)
        - create firebase.js in the root folder, install firebase (npm install firebase) & copy the code we see on firebase. 
    
    - Register Form
        - go to pages->auth->Register.jsx
        - setup the form by creating Register function

    - Email link to SignIn 
        -   add react toastify (npm i react-toastify)
        - import { auth } from "../../firebase";
        - 


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