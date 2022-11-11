import React, { useState } from 'react'
import axios, { AxiosError } from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLoginSuccess } from '../REDUXStores/user';
const Registeruser: React.FC = () => {
  let navigate = useNavigate();
  const [Username, setUsername] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [PasswordCheck, setPasswordCheck] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [RegisterError, setRegisterError] = useState<boolean>(false);
  const [RegisterErrorMessage, setRegisterErrorMessage] = useState<string>('');
  const User = useSelector((state: any) => state.user.value);
  const [PrevInvalidUsername, setPrevInvalidUsername] = useState<string>('');
  const DispatchUserInfoToStore = useDispatch();
  const [RegisterButtonDisabled, setRegisterButtonDisabled] = useState<boolean>(false);
  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(Username, Password, PasswordCheck, Email);

    SubmitToApi();
  }

  const SubmitToApi = () => {
    // added a delay to fix a bug where the user needed to click twice for the api request to be sent
    setTimeout(() => {
      axios
        .post("http://localhost:5000/api/v1/user-endpoint/Create-new-user", {
          Username: Username,
          Password: Password,
          Email: Email,
        })
        .then(function (response) {
          if (response.data.message === "User Created") {
            DispatchUserInfoToStore(
              UserLoginSuccess({
                UserUUID: response.data.UserUUID,
                Username: Username,
                Email: Email,
                ForumsSubbedTo: response.data.UserData.ForumsSubbedTo,
                IsUserLoggedin: true,
              })
            );
            //go to previous page
            navigate(-1);
          }
        })
        .catch(function (reaseon: AxiosError) {
          console.log(reaseon);
        });
    }, 1);
  };
  const CheckUsername = () => {
    if (RegisterError == false) {
      axios
        .post("http://localhost:5000/api/v1/user-endpoint/Check-username", {
          Username: Username,
        })
        .then(function (response) {
          console.log(response.data.error);
          if (response.data.error === "Username taken") {
            setRegisterError(true);
            setRegisterErrorMessage("Username is already taken");
            setRegisterButtonDisabled(true);
            setPrevInvalidUsername(Username);
          }
        })
        .catch(function (reaseon: AxiosError) {
          console.log(reaseon);
        });
    }
  };
  return (
    <form className="bg-grey-lighter h-4/5 flex columns">
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
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onBlur={CheckUsername}
            onFocus={() => setRegisterError(false)}
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
            className="w-full px-4 py-2 font-bold text-white dark:dark:bg-gray-800 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={onSubmit}
            disabled={RegisterButtonDisabled}

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
        <div className="text-white mt-6">
          Already have an account?
          <a className="no-underline border-b border-blue text-blue" href="../login/">
            Log in
          </a>.
        </div>
      </div>

    </form>
  )
}
export default Registeruser;