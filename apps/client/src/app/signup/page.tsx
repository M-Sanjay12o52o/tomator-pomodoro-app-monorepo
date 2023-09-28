'use client'

import {Signup} from "ui";
import axios from "axios";

const SignupPage = () => {
  return <div>
    <Signup onClick={async (username, email, password) => {
      const response = await axios.post("/api/signup", {
        username,
        email,
        password
      })
      localStorage.setItem("token", response.data.token)
    }} />
  </div>
} 

export default SignupPage