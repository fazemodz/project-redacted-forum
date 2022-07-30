import React, { useState } from 'react'
import axios from 'axios';

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
        setRegisterSuccess(true);
        console.log(response.data);
      })
      .catch(function (error) {
        setRegisterError(true);
        setRegisterErrorMessage(error);
        console.log("An error occurred: " + RegisterErrorMessage);
      }
      );
  }
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <input
          type="Username"
          placeholder="Username"
          value={Username}
          onChange={(e) => setUSername(e.target.value)}
          id="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <input
          type="password"
          placeholder="Please re-enter your password"
          value={PasswordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          id="passwordCheck"
        />
        <button onClick={onSubmit}>Register</button>
      </form>
    </div>
  )
}
export default Registeruser;