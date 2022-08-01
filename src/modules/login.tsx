import { useState} from "react";
const Login: React.FC = () => {
	const [Username, setUSername] = useState<string>('');
	const [Password, setPassword] = useState<string>('');
	const [IsUsernameInvalid, setIsUsernameInvalid] = useState<boolean>(false);
	const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		if(Username.includes('@') && Username.includes('.')) {
			setIsUsernameInvalid(true);
			console.log('Username is not valid');
		}
		else {
		event.preventDefault();
		console.log(Username, Password);
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
			  id="username"
			  className="block border border-grey-light w-full p-3 rounded mb-4"
			/>
			<label
			  htmlFor="username"
			  className={IsUsernameInvalid ? "block text-red-500" : "block text-grey-darker"}
			/>
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