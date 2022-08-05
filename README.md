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
            - go to client->pages->auth->login & see the createOrUpdateUser function we create before
            - go to the console to see the result , we have CREATE OR UPDATE RES and response as userInformation
            - in the vscode terminal we have USER CREATED & his infomation.

    39. API User Response
        1.  go to Login page.
        NB: Previously in the login page , we were dispatching to the redux tools only the email & the token. it was came from firebase.com.
        But now we are able to get the response from our on server using the createOrUpdateUser method.
            - replace the console.log("CREATE OR UPDATE RES", res) by dispath content commented below
            -  add _id,role,name property(name: res.data.name), update other informations.
            - go to redux devtools and try if every thing works as we want.
            - go to network (create-or-update-user) see the response:
                - we send authtoke to the headers
                -& we get response the response contening user information.

        NB:unfortunately it doesn't persit in the redux devtools.
        if you refresh the page we only have email and token  we got from firebase.
        that means we have to create one more endpoint that give us the current user. and in App.js we can create the request to our backend.
        we can make request to our Backend in backend using  existing UseEffect in App.js

        2. go to Login.js & copy the entire createOrUpdateUser function witch is inside try and catch
        3. replace te dispatch after signInWithPopup by what the  createOrUpdateUser we have copied.
        4. Try if it's works well.
        5. go to RegisterComplete todo something similar
            - First we need to access to the reduxtools
            - go to Login pages
                - copy import { useDispatch, useSelector } from "react-redux" and past it to RegisterComplete.
                It will allow us to access to the redux store.
                - copy user cons from Login to RegisterComplete Page
                - copy createOrUpdate function from Login to RegisterComplete
                - let's try to a new User Register if everything work's well.
                NB: we will see (email;token,role and id without name) because after registration the user have not give his name.
        6. go to Header components
            - copy submenu title and past it in controllers->auth.js ({ email, name:email.split("@")[0], picture })
            - register a new use, before delete the old user. try again a now we have the name of the new user.
        7. Remove the duplicate createOrUpdateUser function present in RegisterComplete & Login component.
        8. create functions folder (client->src->functions->auth.js) ,add auth.js file and paste createOrUpdateUser function we have removed early.

    40. Current User Endpoint
        1. create a new endpoint named current user in server->routes->auth.js
        2. create currentUser function in controllers->auth.js
        3. go to client->src->function & create currentUser function.
        4. go to App.js:
            - import currentUser
            - copy createOrUpdateUser function in RegisterComplete file & paste it in App.js
            - remove the dispatch present in useEffect  & replace it by our copy
            - change the name createOrUpdateUser to currentUser
            - Lets try if we keep all  information in redux store now!

    41. Role Based Redirect
        1. go to login, comment navigate function & create rolebasedRedirect below
            - add the res we got from our API int he function.
            -  rolebasedRedirect function in googleLogin  & commente navigate
            - Let's try!

    42. Protected User Route
        1. create user folder in pages
        2. create History Component & add it to App.js
        3.create component->routes  for protect the route
        4. create UseRoute component & import it in App.js (replace Route by UserRoute)//see that next time

    43. Loading to redirect
        1. create LoandingToRedirect file in routes folder
        2. test
    44. Sidebar Nav for User
        1. create UserNav component & import it in History.js

    45.  Password Update
        1. create Password and Wishlist.
        2. copy them to App.js
        3. go to Password & import{ auth} from firebase, toast,useState
        4. create passwordUpdateForm function
        5. create handleSubmit

    46. Admin Check Middleware
        1. go to server->middlewares->auth.js
        2. create adminCheck function
            - import a User Model
            - add a database query
            - find the user & add if statement
        3. go to auth routes
            - add adminCheck middleware function

    47. Admin Route
        1. go to client->Route->UserRoute.jsx
        2. copy and create AdminRoute
        3. go to function->auth.js & create currentAdmin function
        3. import currentAdmin to AdminRoute.js
        4. create an admin folder (pages->admin) & AdminDashboard.jsx
        5. import AdminDashboard to App.js

    48. Warnings and cleanup

VI. Categories CRUD 49. Category Schema

    1. go to models folder and create category.js

52. category-list-read-update-delete
    I. xxxxxxx

53. Category Routes
    I. go to the routes->category.js
    II. copy auth.js & past in category.js
    III. create category.js in controllers folder - import category model - add different function

54. category create
    I. npm i slugify & import it
    II. fill create Method

55. Category List Read Update Delete
    I. fill list,read,remove & update method,

56. Category CRUD Requests (frontend)
    I. go to client->components->functions & create category.js 2. create getCategories method to send a request to our backend.

57. Dynamic Dashboard Link
    I. edit Header component by adding a conditional rendering (dashboard & history)

58. Admin Sidebar Nav
    I. create nav->AdminNav.jsx
    II. create pages->admin->category->CategoryCreate.jsx 3. import CategoryCreate in App.js

59. Category Create and List
    I. go to pages->admin->category->CategoryCreate.jsx
    II. import & add useEffect to retrieve data from the backend
    III. import toast, and useSelector to access to th user token
    IV. create a form and fill it

60. Category Render and Delete 1. add handleRemove function in CategoryCreate.jsx 2. improve the display of data retrieved from the server

61. Category Update
    I. create pages->admin->category->CategoryUpdate.jsx
    II. copy CategoryCreate and update informations

62. Code Refactor - Reusable Component
    I. create forms folder component
    II. create categoryForm & remove form content from categoryForm function(delete it after in CategoryCreate & CategoryUpdate) incategoryUpdate.js
    III. destructure information from our form
    IV. add categoryForm in CategoryUpdate et CategoryCreate.jsx

63. Search Filter Category
    I. go to CategoryCreate Page
    II. set Keyword state
    III. create an iput field.
    IV. create handleSearchChange function.  
    V. create searched function & use it with map method below

64. Refactor Search filter
    I. create forms->LocalSearch.jsx
    II. add step 2 and 3 inside from CategoryCreate.jsx
    III. destructure content from LocalSearch

    VII. Sub Categories CRUD

65. Sub Categories CRUD
    I. create sub.js controller,route and model
    II. import default route in server.js
    NB: subscategories will be associated with category.
    Each subcategory must belong to one parent category.

66. Sub Categories Functions
    I. create pages->admin->sub->SubCreate.jsx
    II. import <AdminNav />
    III. add <SubCreate /> to App.js.
    IV. create functions->sub.js and fill it using category.js

67. Sub Category Create
    I. copy CategoryCreate content & paste it in SubCreate.jsx
    II. edit the SubCreate content
    III.create select element to select the parent category

68. Showing Sub Categories and Remove
    I. add getSubs function
    II. add loadSubs category
    III. add filtering sytem
    IV. add remove option

69. Sub Category Update
    I. copy <CategoryUpdate /> content and create <SubUpdate />
    II. import <SubUpdate /> in App.js
    III. update <SubUpdate />

    VIII. Creating Products with Categories and Sub Categories (Advance)

70. Product Model
    I. create models->product.js
71. Product Create Backend
    I. create routes->product.js
    II. create controllers->product.js
    III. import productRoutes in server.js

72. Create Product Page
    I. create pages->admin->product->ProductCreate.jsx
    II. create src->functions->product.jsx

73. Product Create Form
    I. create a state & initial state.
    II. create a <form onSubmit={handleSubmit}>
    III. ceate an input for title & add a dynamic <input onChange={handleChange}/> event handler
    IV. destructure values from the state
    V. ceate an input for dscription,price,shipping,quantity,color & brand
74. Create Product
    I. fill handleSubmit & handleChange
    II.comment category,subs & images . we will user them later .
    III.try to create a new product.
75. Alert and Reload after Product Create
    I. go to productCreate & add window.alert
    II. reload the page
    III. update the initialState because of dev process
76. Product Create Error Message
    I. go to the controllers->product.js & update catch block
    II. grab the error message in productCreate.jsx
77. GET Endpoint - Products
    I. create a endpoint to fetch all products in routes->product.js
    II. add read method controller

78. Code Refactor
    I. refactor ProductCreate.jsx component
    II. create a new form components->form->ProductCreateForm.jsx
    III. import <ProductCreateForm/> in <ProductCreate/>
    IV. Pass values,handleSubmit and handleChange as Props in <ProductCreateForm/>

79. Create Product with Category
    I. fetch all categories using {getCategories} functions.
    II. add useEffect to load categories when the component is mounted
    III. create loadCategories function.
    IV. go to sub -> SubCreate.jsx and copy <div className="form-group">
    V. Paste elements we have copied from <SubCreate/>
    VI. uncomment models->product.js category field

80. Sub Categories Endpoint
    I. uncomment sub element models->product.js
    II. go to routes->category.js

81. List Sub Categories Based on Parent Category
    I. write a function to fetch subs category.  
    II. create getCategorySubs function & import it in getCategorySubs.  
    III. create handleCatagoryChange & destructure it in ProductCreateForm.
    IV. replace handleChange by handleCatagoryChange.
    V. add subOptions and setSubOptions state in ProductCreat.jsx

82. Sub Categories Props

    <ProductCreate/>
        I. add [showSub, setShowSub]  states
        II. Pass showSub and subOptions to <ProductCreateForm/>
    <ProductCreateForm/>
        I. add subOptions conditional rendering

83. Multi Select Ant Design

    <ProductCreateForm/>
        I. go to (https://ant.design/components/select/#header) and search ant Design <select/>
        II. import { Select } from "antd" & add <Select/> info

84. Create Product with Sub Categories

     <ProductCreateForm/>
        I. add showSub conditional rendering inside <Select/> and outside.
        II. add setShowSub & subs in <ProductCreate>->handleCategoryChange()

IX. Multiple Image Uploads

85. Cloudinary Upload Endpoints
    I. signup to cloudinary to get API key/secret & put them in server->env file

    II. create server endpoints to upload and remove files from cloudinary

        I. create cloudinary routes
        II. npm i cloudinary
        III. create cloudinary controllers

86. File upload components
    Objectif: Resize the file in frontend and send to our Server

    I. create components->forms-><FileUpload/> content
    II. import <FileUpload/> in <ProductCreate/>

87. File Resize in React
    I. npm i react-image-file-resizer
    II. <FileUpload/>

        I. get the token from the user using the store
        II. get all the file creating files const and add a file statement

88. Muliple Image Uploads
    I. <ProductCreate/>

        I. create const [loading, setLoading] = useState(false);
        II. pass { values, setValues, setLoading } as props in <FileUpload/> to access the state

    II. <FileUpload/>

        I. add images to te backend using axios.
        II. add limit size to our uploaded file in server.js

89. Image Preview
    <FileUpload/>

        I. import { Avatar } from 'antd';
        II. map all images from values.images

90. Product Create with Multiple Images
    <FileUpload/>

        I. add shape in <Avatar/>
        II. import <Badge/> from "antd" & make it clickable using onClick
        III. create handleImageRemove() to remove image from the backend,cloudinary & the state.
        IV. add loading ant design icon (https://ant.design/components/icon/) to the parent compoenent  <ProductCreate/>
        V. uncomment images property in products model .
        VI. try to create a new product in front & verify it in the backend.

X. Update and Delete Products (Advance)

91. List All PRoducts Endpoint
    I. update Products route to fetch all products
    II. update product controllers to limit the number of fetching data.
    III. change read controllers to listAll and and limit,populate & sort products in it

92. Fetch All Products in Admin Dashboard
    I. create a function to fetch all in components->functions->products.
    II. go to pages->admin-> <AdminDashboard/>

        I. import { getProductsByCount } from "../../functions/product";
        II. add a state and create loadAllProducts()
        III. add useEffect to fetch the product when the component mount.
        IV. add a conditional rendering inside

93. Admin Products Card
    I. map all products in <AdminDashboard />
    II. create <AdminProductCard/> & import it in <AdminDashboard />

94. Code Organization
    I. set p-1 instead of m-2 in <AdminProductCard/>
    II. Move <AdminDashboard / > to product-><AllProducts/>
    III. import <AllProducts/> in App.js

95. Default Image Ant Icons and Product Description
    I. create src->images & import laptop in <AdminProductCard/>
    II. import { EditOutlined, DeleteOutlined } in <AdminProductCard/>
    III. add space between cards in <AllProducts/>

96. Product Delete Endpoint
    I. add Product Delete Endpoint in the backend and his controller.

97. Delete A Product
    I. create a removeProduct method to fetch data in the Frontend
    II. add useSelector to get the token
    III. create handleRemove() & use removeProduct() in <AllProducts/>
    IV. pass handleRemove has a props in <AdminProductCard/>

98. Product Update Page & Product Slug from Router
    <AdminProductCard/>

    I. import { Link } from "react-router-dom";
    II. wrap edit icon with <Link/>

    III. create <ProductUpdate/> page to grap the slug from the url in the <Link/>

        I. copy <ProductCreate/> and update informations
        II. import <ProductUpdate/> in App.js

    IV. create a single product endpoint and controller in the backend
    V. create functions->product->getProduct()

99. Product Update Component
    I. create <ProductUpdateForm/> based on <ProductCreateForm/>
    II. use <ProductUpdateForm/> in <ProductUpdate/>
    III. create handleSubmit() et handleChange()

100.  Pre Populate Shipping Color and Brand
      I. add a conditional rendering in <ProductUpdateForm/> -> Shipping
      II. add a value to color & brand.

101.  Pre Populate Category
      <ProductUpdate/>
      I. add loadCategories() & handleCatagoryChange()
      II. create [categories, setCategories] & pass {handleCatagoryChange,categories,subOptions} them as a props

      <ProductUpdateForm/>
      I. use {handleCatagoryChange,categories,subOptions} props
      II. add Category script

102.  Pre Populate Sub Categories
      I. add subCategory script from <ProductCreateForm/> to <ProductUpdateForm/>
      II. pass arrayOfSubs from <ProductUpdate/> to <ProductCreateForm/>

      <ProductUpdate/>

            I. update loadProduct()
            II. add [arrayOfSubs, setArrayOfSubs] and pass them like a props in  <ProductUpdateForm/>

103.  Category and Sub Category Sync on Update
      I. <ProductUpdate/>

            I. update handleCatagoryChange with selectedCategory
            II. create const [selectedCategory, setSelectedCategory] & pass it has a props

      II. <ProductUpdateForm/>

            I. use selectedCategory as a value in category section.

104.  image Uploads in Product Update
      <ProductUpdate/>
      I. add <FileUpload/> & create [loading, setLoading] state

105.  Product Update Endpoint
      I. create an update endpoint & controller in the backend.

106.  Update A Product
      I. create functions-> updateProduct() & import it in <ProductUpdate/>
      II. update handleSubmit() in <ProductUpdate/>

XI. Displaying Products Pagination and Carousel

107.  Fetch Products in Home Page
      <Home/>
      I. import functions->product->getProductsByCount()
      II. add [products, setProducts] & [loading, setLoading] states
      III. add useEffect and create loadAllProducts const

108.  Product Card Component
      I. create components->card-><ProductCard/>
      II. map product infomation in <Home/> and pass them as a props in <ProductCard/>

109.  Using Ant Design Card
      <ProductCard/>
      I. import { Card },{ EyeOutlined, ShoppingCartOutlined },laptop & Link
      II. destructure product information
      III. add a script in <Card/>

110.  . Typewriter Effect
      I. npm i typewriter-effect
      II. create components->card-><Jumbotron/>
      III. pass an Array of text as a props in <Home/>

111.  Loading Card
      I. create <LoadingCard /> & import it in <Home/>
      II. Pass a count props for display the number of skeleton

112.  List Product with Sort Order and Limit
      I. create a new endpoint and controller to Sort Order and Limit product

113.  New Arrivals & Best Sellers
      I. create getProducts() function.
      II. <Home/>

            I. instead of using getProductsByCoun, use getProducts

      III. create components <NewArrivals /> and <BestSellers /> based on <Home/> script
      IV. update <Home/> script

PAGINATION: to make pagination we need to:

    - get total quantity of products from database
    - have the page number available in the state
    - use ant design Pagination component.
    - to click pagination and update count state
    - ...make request to backend based on that page number

114.  Get Total Products Count
      I. create a new endpoint & controller to get Total Products Count

115.  List Products Endpoint with Pagination
      I. update our control of products at list endpoint because of sending page number

116.  New Arrivals Pagination
      I. create getProductsCount() function & implement it in <NewArrivals/>
      II. <NewArrivals/>

            I. create [productsCount, setProductsCount] & [page, setPage]
            II. add useEffect to getProductsCount() & import { Pagination } from "antd";
            III. add Pagination using ant <Pagination/>

117.  Best Sellers Pagination
      I. create getProductsCount() function & implement it in <BestSellers/>
      II. <BestSellers/>

            I. create [productsCount, setProductsCount] & [page, setPage]
            II. add useEffect to getProductsCount() & import { Pagination } from "antd";
            III. add Pagination using ant <Pagination/>

118.  View Products Page
      NB: we grab the slug info from the url and make the request to our backend to get the single product.
      we use router.get('/product/:slug', read) endpoint and read method from the controllers to do that.

      I. create a pages-><Product/> to grab the slug from the url

                I. create [product, setProduct] states
                II. retrieve the slug from the url using useParams()
                III. add useEffect and getProduct()
                IV. add Product in App.js

119.  Single Product Component
      I. create components->card-> <SingleProduct/> and import it in <Product/>

120.  Default Image
      <SingleProduct/>
      I. npm i react-responsive-carousel (https://www.npmjs.com/package/react-responsive-carousel)
      II. add <Carousel /> and map images
      III. style images in index.css

121.  Product List Items Component
      I. create <ProductListItems/> and import it in <SingleProduct/>
      II. add a conditional rendering in <SingleProduct/> & <ProductListItems/>

122.  Tabs
      <SingleProduct/>
      I. import { abs } from 'antd' & destructure const { TabPane } = Tabs
      II. add <Tabs/> & <TabPane/>


    XII. Star Rating System

123.  Star Rating System Backend
      I. uncomment rating system in Product model.
      II create a rating endpoint and controller

124.  React Star Rating
      I. npm i react-star-ratings (https://www.npmjs.com/package/react-star-ratings)
      II. <SingleProduct/>

             I. add a reting system using <StarRating/>

125.  Modal for Rating
      I. create components->modal-><RatingModal/> using antd Modal
      II. implement <RatingModal/> in <SingleProduct/>

126.  Login to Leave Rating
      I. create handleModal() in <RatingModal/> to redirect user

127.  Redirect to Intended Page (Previous Page after login)
      <RatingModal/>
      I. update handleModal()

      <Login/>
      I. update rolebasedRedirect() & useEffect to redirect user

128.  API Request with Rating
      I. <SingleProduct/>

            I. cut changeRating() in  <StarRating/>, paste in <Product/> & pass as props in <SingleProduct/>

      II. <Product/>

            I. create [star, setStar] state
            II. create onStarClick() and pass it as a props in
            III. create functions->product.js->productStar() && <Product/>

129.  Show Users Existing Star Rating
      <Product/>

             I. replace star parameter by newRating in onStarClick()
             II. add a useEffect to display star

130.  Show Average Rating
      I. create functions->rating.js to display the average rating
      II. import rating() in <SingleProduct/>

131.  Show Average Rating in Home Page
      I. update <SingleProduct/> informations.
      II. add the Number of rating in showAverage() and update style.
      III. addd show the rating in <Productcard/> using <SingleProduct/> script

132.  Related Products Backend
      I. create a related product endpoint and controller.

133.  Show Related Products
      I. create function->getRelated() & use it in <Product/>

      <Product/>

            I. create const [related, setRelated] = useState([])
            II. make a request to get a related product in loadSingleProduct()
            III. display related product using a conditionnal rendering

XIII. Products based on Categories and Sub Categories

134. Categories List
     I. create category-><CategoryList> & use it in <Home/>

135. Categories Home Page
     I. create pages->caegory-><CategoryHome/> & import it in App.js
     II. go to the cread category controllers and modify it to get all product that belongs to this category.

136. Category Page with Products
     <CategoryHome/>

     I. add a conditionnal rendering to show all product that belongs to the same category.

137. Sub Categories with Products
     I. go to the read sub controllers method and modify it to get all product that belongs to this subCategory.
     II. create <SubList/> based on <CategoryList> script & and import it in <Home/>
     III. create <SubHome/> page base on <CategoryHome/>

XIV. Advance Searching and Filtering (9 Different Ways)

138.  Search Filter Backend
      I. create a search endpoint, handleQuery and searchFilters controller

139.  Search Redux Setup
      NB: Implement search feature in the navbar
      I. create searchReducer
      II. create forms-><Search/> & import it in nav-><Header/>

140.  Shop Page
      I. create <Shop/> and import it in App.js

                   I. import getProductsByCount() to show the limited number of product
                   II. import <ProductCard/>
                   III. create [products, setProducts] to store product & [loading, setLoading] to show loading
                   IV. loadAllProducts() using useEffect.
                   V. add Shop in the <Header/>

141.  Search By Text
      <Shop/>
      I.access search from our redux store
      II. Make a request to the backend every time text changes to fetch the product
      III. create functions->fetchProductsByFilter()

142.  Filter By Price Range Backend
      I. create handlePrice() and update searchFilters controller.

143.  Filter By Price Range Frontend
      <Shop/>
      I. add useDispatch() to dispatch
      II. create [price, setPrice] & [ok, setOk]
      III. destructure { SubMenu, ItemGroup } from Menu;
      IV. import { Menu, Slider } & { DollarOutlined }
      V. update search/filter section
      V. load products based on price range
      VI. add a price to the <ProductCard/>

144.  Filter By Categories Backend
      I. add a category handler in controller->Produt.jsx

145.  Filter By Categories Frontend
      <Shop/>
      I. import functions->getCategories() & create [categories, setCategories]
      II. Make a request to the backend to get allCategories in useEffect (getCategories())
      III. add a <Submenu/> categories
      IV. create handleCheck () & showCategories ()
      V. add showCategories () in <Submenu/> categories

146.  Filter By Star Rating Backend
      I. add a Star handler in controller->Product.jsx

147.  Filter By Star Rating Frontend
      I. create components->froms-> <Star/>

              I. import StarRating from "react-star-ratings"
              II. pass { starClick, numberOfStars } as a props from <Shop/>.

      <Shop>

              I. import {StarOutlined} from '@ant-design/icons';
              II. import Star from '../components/forms/Star';
              III. add const [star, setStar] states.
              IV. ceate <SubMenu/> to return < <Star/> 5 times
              V. ceate <showStars/> to show all stars
              VI. create <handleStarClick /> to make a request to the backend.

148.  Filter By Sub Category Backend
      I. add a Sub handler in controller->Product.jsx

149.  Filter By Sub Category Frontend
      <Shop>
      I. import { getSubs } from "../functions/sub";
      II. create [subs, setSubs] & [sub, setSub]
      III. fetch getSubs() using useEffect
      IV. create <SubMenu/> to return all Sub Categories
      V. create <showSubs/> to show all SubsCategories
      VI. create <handleSub /> to make a request to the backend.

150.  Filter By Shipping Color and Brand Backend
      I. add Shipping Color and Brand handler in controller->Product.jsx

151.  Filter By Brands Frontend
      <Shop>
      I. create [brands, setBrands] & = useState('');
      II. ceate <SubMenu/> to return all brands
      V. ceate < showBrands/> to show all brands
      VI. create <handleSub /> to make a request to the backend.

152.  Filter By Colors Frontend

153.  Filter By Shipping Frontend

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
