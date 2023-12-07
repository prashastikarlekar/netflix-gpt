/** @format */

import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isSignInForm, setSignInForm] = useState(true);

	const fullName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const [errorMessage, setErrorMessage] = useState(null);

	const toggleSignInForm = () => {
		setSignInForm(!isSignInForm);
	};
	const handleButtonClick = () => {
		// Validate form data
		// console.log(fullName.current.value);
		// console.log(email.current.value);
		// console.log(password.current.value);
		const message = checkValidateData(
			isSignInForm,
			fullName?.current?.value,
			email.current.value,
			password.current.value
		);
		setErrorMessage(message);
		// if there are no validation errors, then only sign up
		if (message) return;

		//Sign in Sign up logic
		if (!isSignInForm) {
			//Sign Up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					console.log(user);
					updateProfile(user, {
						displayName: fullName.current.value,
						photoURL: "",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " - " + errorMessage);
				});
		} else {
			// Sign In logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " - " + errorMessage);
				});
		}
	};
	return (
		<div>
			<Header />
			<div className='absolute'>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt='Logo'
				/>
			</div>
			<form
				className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'
				onSubmit={(e) => e.preventDefault()}>
				<h1 className='font-bold text-3xl py-4'>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={fullName}
						type='text'
						placeholder='Full Name'
						className='p-4 my-4 w-full bg-neutral-700'
					/>
				)}
				<input
					ref={email}
					type='text'
					placeholder='Email Address'
					className='p-4 my-4 w-full bg-neutral-700'
				/>
				<input
					ref={password}
					type='password'
					placeholder='Password'
					className='p-4 my-4 w-full bg-neutral-700'
				/>
				<p className='text-red-700 font-bold text-lg p-2'>{errorMessage}</p>
				<button
					className='p-4 my-6 bg-red-700 w-full rounded-lg'
					onClick={handleButtonClick}>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netflix? Sign Up Now"
						: "Already Registered? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
