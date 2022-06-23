import User from "../models/user.js";

export const createOrUpdateUser = async (req, res) => {
  //res.send("Hello World!");
  //res.json({ message: "Hello World!" });
  const { name, picture, email } = req.user; //req.user information came from the middleware  authCheck.
  const user = await User.findOneAndUpdate({ email }, { name }, { new: true }); //we await for the User model to find the user & we will use the findOneAndUpdate method.
  //Notice: we can also write {email: email}, {name: name,} {new: true}. the advantage ot using the new: true is that we will get the updated user information.
  //findOneAndUpdate() is a method of the User model.its takes the email and updates the name. the fird argument is optional.
  //if user already exists in the database, we will update the user.
  if (user) {
    console.log("USER UPDATED", user);
    res.json(user);
  } else {
    const newUser = await new User({ email, name, picture }).save(); //we can also use User.create({ name, picture, email });
    console.log("USER CREATED", newUser);
    res.json(newUser);
  }
};
