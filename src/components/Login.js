/** @format */

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setSignInForm] = useState(true);
	const toggleSignInForm = () => {
		setSignInForm(!isSignInForm);
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
			<form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
				<h1 className='font-bold text-3xl py-4'>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type='text'
						placeholder='Full Name'
						className='p-4 my-4 w-full bg-neutral-700'
					/>
				)}
				<input
					type='text'
					placeholder='Email Address'
					className='p-4 my-4 w-full bg-neutral-700'
				/>
				<input
					type='password'
					placeholder='Password'
					className='p-4 my-4 w-full bg-neutral-700'
				/>
				<button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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
