// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut }  from "firebase/auth";
import { getFirestore, collection, doc, getDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd2iFeWoQyPeEPWnFUF7tXgOBkk2ixkoI",
    authDomain: "authentication-8d43d.firebaseapp.com",
    projectId: "authentication-8d43d",
    storageBucket: "authentication-8d43d.appspot.com",
    messagingSenderId: "124825560661",
    appId: "1:124825560661:web:57ab9badfef239736316dc",
    measurementId: "G-6JKFE58N33"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const db = getFirestore(app)

export const auth = getAuth(app);

export const retrievesdata = async (stat) => {
    const docRef = doc(db,"stats","values")
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const res = docSnap.data()
            console.log(res[stat]);
            return res[stat];
        } else {
            console.log("Document does not exist")
        }
    
    } catch(error) {
        console.log(error)
    }
    
};

