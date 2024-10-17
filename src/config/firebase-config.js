import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration




const firebaseConfig = {
    apiKey: "AIzaSyA2FjP_PWGvPyYrNGJgXMIyD-5EVvYU2QY",
    authDomain: "coderhouse-ecommerce-sm.firebaseapp.com",
    projectId: "coderhouse-ecommerce-sm",
    storageBucket: "coderhouse-ecommerce-sm.appspot.com",
    messagingSenderId: "867267632475",
    appId: "1:867267632475:web:4b0476834b304838940e7e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);