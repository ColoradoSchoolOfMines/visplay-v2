import {Button, TextField} from "@mui/material";


export default function Login() {
    return (
        <div className="flex items-center flex-col ">
        <div className="flex flex-col place-content-center h-screen w-64">
            <h1 className="text-center">Visplay</h1>
            <TextField label="Username" variant="outlined" className="bor"/>
            <TextField label="Password" variant="outlined"/>
            <Button href="home" variant="outlined">Login</Button>
        </div>
        </div>
    )
}