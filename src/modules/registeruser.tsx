import React, { useState } from 'react'
import axios , {AxiosResponse, AxiosError}from 'axios';
const Registeruser: React.FC = () => {
  const [Username, setUSername] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [PasswordCheck, setPasswordCheck] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [RegisterError, setRegisterError] = useState<boolean>(false);
  const [RegisterErrorMessage, setRegisterErrorMessage] = useState<string>('');
  const [RegisterSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [PasswordCheckResult, setPasswordCheckResult] = useState<string>('');
  const [EmailCheckResult, setEmailCheckResult] = useState<String>('');
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(Username, Password, PasswordCheck, Email);
    if (PasswordCheck === Password) {
      setPasswordCheckResult('Passwords match');
    }
    else {
      setPasswordCheckResult('Passwords do not match');
    }
    if (Email.includes('@') && Email.includes('.')) {
      setEmailCheckResult('Email is valid');
    }
    else {
      setEmailCheckResult('Email is not valid');
    }
    if (PasswordCheckResult === 'Passwords match' && EmailCheckResult === 'Email is valid') {
      SubmitToApi();
    }
  }
  const SubmitToApi = () => {
    axios.post('http://localhost:5000/api/v1/user-endpoint/Create-new-user', {
      Username: Username,
      Password: Password,
      Email: Email
    })
      .then(function (response) {
        console.log(response.status);
        setRegisterSuccess(true);
      })
      .catch(function (reaseon: AxiosError) {
        setRegisterError(true);
        setRegisterErrorMessage(reaseon.message);
        console.log("An error occurred: " + RegisterErrorMessage);
      }
      );
  }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex columns">
      <div className="container max-w-sm mx-auto flex 1 flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3x1 text-center">Register</h1>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <input
            type="Username"
            placeholder="Username"
            value={Username}
            onChange={(e) => setUSername(e.target.value)}
            id="username"
            className="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Please re-enter your password"
            value={PasswordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            id="passwordCheck"
            className="block border border-grey-light w-full p-3 rounded mb-4"
          />
          <button 
          type="submit" 
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" 
          onClick={onSubmit}
          >
            Register
          </button>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a className="no-underline border-b border-blue text-blue" href="../login/">
            Log in
          </a>.
        </div>
      </div>

    </div>
  )
}
export default Registeruser;