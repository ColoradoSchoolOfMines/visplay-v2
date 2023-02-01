import { Button, TextField } from "@mui/material";
import next from "next";
import VisplayLogo from "../../assets/icons/visplay_icon.svg"
import Image from 'next/image'
import { useState } from "react";

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPass] = useState('');
  

  return (
      <div className="flex items-center flex-col">
        <div className="flex flex-col place-content-center h-screen w-64 space-y-10">
          <Image src={VisplayLogo} width={400} height={200}/>
          <h1 className="text-center text-5xl">Visplay</h1>
          <TextField label="Username" variant="outlined" className="bor" onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" onChange={(e) => setPass(e.target.value)} />
          <Button variant="outlined">
            Login
          </Button>
          <Button variant="outlined" onClick={() => {
            const requestOptions = {
              method: "POST",
              header: {'content-Type': 'application/json'},
              body: JSON.stringify({'username': username, 'password': password})
            };
            fetch('http://127.0.0.1:8080/login', requestOptions)
              .then(response => response.json())
              .then(data => console.log(data));
          }}>
            Sign Up
          </Button>
        </div>
      </div>
  );
}
