import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
//import { signInWithPopup } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4LSrL-mWi_J6LGyv3QnvC4JBA4Rjskf8",
  authDomain: "minter-a28a6.firebaseapp.com",
  databaseURL: "https://minter-a28a6-default-rtdb.firebaseio.com",
  projectId: "minter-a28a6",
  storageBucket: "minter-a28a6.appspot.com",
  messagingSenderId: "428227132921",
  appId: "1:428227132921:web:a4acdf4913ee5b601b1128",
  measurementId: "G-JFXC6RB91L"
};// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const firebases=firebase.initializeApp(firebaseConfig);
//const provider = new firebase.auth.GoogleAuthProvider()
// export const signInWithGoogle = () => {
//         signInWithPopup(auth, provider)
//           .then((result) => {
//             const name = result.user.displayName;
//             const email = result.user.email;
//             const profilePic = result.user.photoURL;      
//             localStorage.setItem("name", name);
//             localStorage.setItem("email", email);
//             localStorage.setItem("profilePic", profilePic);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
// };

export const auth = firebase.auth()
// firebase.initializeApp(firebaseConfig);
  
// export default firebase
export default firebase
