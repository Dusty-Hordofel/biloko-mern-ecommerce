import admin from "firebase-admin";
import serviceAccount from "../config/fbServiceAccountKey.json" assert { type: "json" };
//console.log(admin);
//var serviceAccount = import("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
