
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKBXT05XzD_2avzknhPmnCRnQfm1Afam0",
  authDomain: "monitorealo-ed506.firebaseapp.com",
  projectId: "monitorealo-ed506",
  storageBucket: "monitorealo-ed506.appspot.com",
  messagingSenderId: "856933091734",
  appId: "1:856933091734:web:4c60709e24da0c96bef5b7",
  measurementId: "G-H2TSR3BKHK"
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export const db = getFirestore(app)