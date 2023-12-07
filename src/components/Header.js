/** @format */

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};
	return (
		<div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
			<img
				className='w-52'
				src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
				alt='Logo'
			/>
			{user && (
				<div className='flex p-2'>
					<img
						className='h-10 w-10'
						src={
							user?.photoURL
								? user?.photoURL
								: "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
						}
						alt='User Icon'
					/>
					<button
						onClick={handleSignOut}
						className='text-white font-bold p-1 h-10'>
						(Sign Out)
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
