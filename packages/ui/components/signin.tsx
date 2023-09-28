'use client'

import { Typography, Card, TextField, Button } from "@mui/material"
import { useState } from "react"

export function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <div>
  <div style={{
      paddingTop: 150,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center"
  }}>
      <Typography variant={"h6"}>
      Welcome to Coursera. Sign in below
      </Typography>
  </div>
<div style={{display: "flex", justifyContent: "center"}}>
  <Card variant={"outlined"} style={{width: 400, padding: 20}}>
      <TextField
          onChange={(evant11) => {
              let elemt = evant11.target;
              setEmail(elemt.value);
          }}
          fullWidth={true}
          label="Email"
          variant="outlined"
      />
      <br/><br/>
      <TextField
          onChange={(e) => {
              setPassword(e.target.value);
          }}
          fullWidth={true}
          label="Password"
          variant="outlined"
          type={"password"}
      />
      <br/><br/>

      <Button
          size={"large"}
          variant="contained"
          // onClick={async () => {
          //     const res = await axios.post(`${BASE_URL}/admin/login`, {
          //         username: email,
          //         password: password
          //     }, {
          //         headers: {
          //             "Content-type": "application/json"
          //         }
          //     });
          //     const data = res.data;

          //     localStorage.setItem("token", data.token);
          //     // window.location = "/"
          //     setUser({
          //         userEmail: email,
          //         isLoading: false
          //     })
          //     navigate("/courses")
          // }}

      > Signin</Button>
  </Card>
</div>
</div>
}