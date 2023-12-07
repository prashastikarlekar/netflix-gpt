/** @format */

export const checkValidateData = (isSignInForm, fullName, email, password) => {
	let isFullnameValid;
	if (!isSignInForm) {
		isFullnameValid =
			/^(?!.{51})[a-zA-Z-]+(?: [a-zA-Z]+(?: [a-zA-Z-]+)?)?$/.test(fullName);
	}

	const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
		email
	);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isSignInForm && !isFullnameValid) return "Full name is not valid.";
	if (!isEmailValid) return "Email ID is not valid.";
	if (!isPasswordValid) return "Password is not valid.";
	return null; //if all validations pass, return null
};
