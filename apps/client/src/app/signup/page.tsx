'use client'

import {Signup} from "ui";

const SignupPage = () => {
  return <div>
    <Signup onClick={(username, email, password) => {
      alert(username);
      alert(email);
      alert(password);
    }} />
  </div>
} 

export default SignupPage