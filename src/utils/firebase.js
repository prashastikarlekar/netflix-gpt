/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAukWabXuJjkp47rp9VTiwtFpKggto_d0Y",
	authDomain: "netflixgpt-30fae.firebaseapp.com",
	projectId: "netflixgpt-30fae",
	storageBucket: "netflixgpt-30fae.appspot.com",
	messagingSenderId: "900949610035",
	appId: "1:900949610035:web:35e288865f8af990d41d46",
	measurementId: "G-K7GT48ET5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
