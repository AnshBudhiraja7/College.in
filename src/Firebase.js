import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyBYUKN4MnDE-6K4pXnYo3bIhOggBrtuo9g",
  authDomain: "adjustmentjs.firebaseapp.com",
  databaseURL: "https://adjustmentjs-default-rtdb.firebaseio.com",
  projectId: "adjustmentjs",
  storageBucket: "adjustmentjs.appspot.com",
  messagingSenderId: "150972125790",
  appId: "1:150972125790:web:043868c9a5708d2f6ddacf"
  };
const fire=firebase.initializeApp(firebaseConfig);
export default fire.database().ref()