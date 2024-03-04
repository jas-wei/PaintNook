// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIvOL_PP1g99qxvDJTHGh5En-DSSz2rvk",
  authDomain: "paintnook.firebaseapp.com",
  projectId: "paintnook",
  storageBucket: "paintnook.appspot.com",
  messagingSenderId: "480380641783",
  appId: "1:480380641783:web:a78fc91ed28ed37a154ef2",
  measurementId: "G-3F1L5GFJNM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);

export { firebaseApp }