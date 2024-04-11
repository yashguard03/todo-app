// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCELxgOdIL7Eh3wcyS1n7BZ6TJ4KY6Xleg",
  authDomain: "projects-240c3.firebaseapp.com",
  projectId: "projects-240c3",
  storageBucket: "projects-240c3.appspot.com",
  messagingSenderId: "48619263176",
  appId: "1:48619263176:web:898fd97961e1aaddc901fd",
  measurementId: "G-QCE185YDT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
