import { Button, TextField } from "@mui/material";
import next from "next";
import VisplayLogo from "../../assets/icons/visplay_icon.svg"
import Image from 'next/image'
import { useState } from "react";
import Cookies from 'universal-cookie';
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/router';

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPass] = useState('');
  
  const cookies = new Cookies();
  const router = useRouter();

  return (
      <div className="flex items-center flex-col">
        <div className="flex flex-col place-content-center h-screen w-64 space-y-10">
          <Image src={VisplayLogo} width={400} height={200}/>
          <h1 className="text-center text-5xl">Visplay</h1>
          <TextField label="Username" variant="outlined" className="bor" onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" onChange={(e) => setPass(e.target.value)} />
          <Button variant="outlined" onClick={() => {
            const requestOptions = {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({'username': username, 'password': password})
            };
            fetch('http://127.0.0.1:8080/auth/login', requestOptions)
              .then(response => response.json())
              .then(data => {
                console.log(data);

                if(data.error == 1) {
                  console.log('User not found');
                  return;
                }

                if(data.error == 2) {
                  console.log('Incorrect password');
                  return;
                }

                cookies.set('sessionID', data);
                router.push('/home');
              });
          }}>
            Login
          </Button>
          <Button variant="outlined" onClick={() => {
            const requestOptions = {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({'username': username, 'password': password})
            };
            fetch('http://127.0.0.1:8080/auth/signup', requestOptions)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                
                if(data.error == 1) {
                  console.log('User already exists');
                  return;
                }

                cookies.set('sessionID', data);
                router.push('/home');
              });
          }}>
            Sign Up
          </Button>
        </div>
      </div>
  );
}
