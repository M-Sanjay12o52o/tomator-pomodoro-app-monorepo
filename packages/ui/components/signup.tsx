'use client'

import { Typography, Card, TextField, Button } from "@mui/material"
import { useState } from "react"

export const Signup = () => {
  const [usename, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
                </Typography>
            </div>
            
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20}}>
            <TextField
                    onChange={(event) => {
                        setUsername(event.target.value);
                    }}
                    fullWidth={true}
                    label="Username"
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    onChange={(event) => {
                        setEmail(event.target.value);
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
                    // onClick={async() => {
                    //     const response = await axios.post(`${BASE_URL}/admin/signup`, {
                    //         username: email,
                    //         password: password
                    //     })
                    //     let data = response.data;
                    //     localStorage.setItem("token", data.token);
                    //     // window.location = "/"
                    //     setUser({userEmail: email, isLoading: false})
                    //     navigate("/courses")
                    // }}

                > Signup</Button>
            </Card>
        </div>
    </div>
  )
}

