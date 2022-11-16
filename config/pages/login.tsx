import { Button, TextField } from "@mui/material";
import next from "next";
import VisplayLogo from "../../assets/icons/visplay_icon.svg"
import Image from 'next/image'

export default function Login() {
  return (
      <div className="flex items-center flex-col">
        <div className="flex flex-col place-content-center h-screen w-64 space-y-10">
          <Image src={VisplayLogo} width={400} height={200}/>
          <h1 className="text-center text-5xl">Visplay</h1>
          <TextField label="Username" variant="outlined" className="bor" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button href="home" variant="outlined">
            Login
          </Button>
          <Button href="home" variant="outlined">
            Sign Up
          </Button>
        </div>
      </div>
  );
}
