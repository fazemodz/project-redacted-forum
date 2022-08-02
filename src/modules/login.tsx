import axios, { AxiosError } from "axios";
import { useState } from "react";
const Login: React.FC = () => {
	const [Username, setUSername] = useState<string>('');
	const [Password, setPassword] = useState<string>('');
	const [IsUsernameInvalid, setIsUsernameInvalid] = useState<boolean>(false);
	const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
			event.preventDefault();
			console.log(Username, Password);
			axios.post('http://localhost:5000/api/v1/user-endpoint/Login', {
				Username: Username,
				Password: Password
			})
				.then(function (response) {
					console.log(response.status);
					console.log(response.data);
				})
				.catch(function (reaseon: AxiosError) {
					setIsUsernameInvalid(true);
					console.log("An error occurred: " + reaseon.message);
				});
	}
	const CheckUsername = () => {
		if (Username.includes('@') && Username.includes('.')) {
			setIsUsernameInvalid(true);
		}
		else {
			setIsUsernameInvalid(false);
		}
	}
	return (

		<div className="bg-grey-lighter min-h-screen flex flex columns">
			<div className="container max-w-sm mx-auto flex 1 flex-col items-center justify-center px-2">
				<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
					<h1 className="mb-8 text-3x1 text-center">Login</h1>
					<input
						type="Username"
						placeholder="Username"
						value={Username}
						onChange={(e) => setUSername(e.target.value)}
						onBlur={CheckUsername}
						id="username"
						className="block border border-grey-light w-full p-3 rounded mb-4"
					/>
					{
						IsUsernameInvalid ?
						<label
							htmlFor="username"
							className="block text-red-500"
						>
							Username is invalid
						</label>
						:
						null
					}
					<input
						type="password"
						placeholder="Password"
						value={Password}
						onChange={(e) => setPassword(e.target.value)}
						id="password"
						className="block border border-grey-light w-full p-3 rounded mb-4"
					/>
					<button
						type="submit"
						className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						onClick={onSubmit}
					>
						Login
					</button>
				</div>
				<div className="text-grey-dark mt-6">
					Don't have an account?
					<a className="no-underline border-b border-blue text-blue" href="/register">
						Register here
					</a>.
				</div>
			</div>

		</div>
	);
}
export default Login;