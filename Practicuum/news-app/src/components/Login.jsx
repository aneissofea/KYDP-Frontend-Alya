import * as React from 'react';
import { Button, IconButton, Input, InputAdornment, TextField, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsLoggedIn, setUsername}) => {

    /**const [values, setValues] = useState({
        username: "",
        password: "",
        showPassword: false,
    });*/

    const [localusername, setLocalUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
;
    const showPasswordHandler = () => {
        //setValues({...values, showPassword: !values.showPassword});
        setShowPassword(!showPassword);
    };

    const mouseDownPasswordHandler = (event) => {
        event.preventDefault();
    };

    /**const inputChangeHandler = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };*/

    const handleLogin = () => {
        console.log(localusername, password);
        
        if (localusername === 'alyam' && password === 'password123') {
        
            console.log("success!");
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('localusername', localusername);
            setIsLoggedIn(true);
            setLocalUsername(localusername);
            navigate('/home');
        }
        else {
            <Alert severity="warning">Wrong username and password</Alert>
        }
    };

    return(
        <div className='container'>
            <Grid container spacing={2} style={{display: "flex", backgroundColor: "#F7E7DC"}}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                        <div 
                            className='header' 
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '10vh'
                            }}>
                            <h1>Find My News</h1>
                        </div>


                        <div className='inputs'>
                            <div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                                <TextField id="outlined-basic" label="Username" variant="standard" onChange={(e) => setLocalUsername(e.target.value)}/>
                            </div>
                            <div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                                <Input
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={showPasswordHandler}
                                                onMouseDown={mouseDownPasswordHandler} >
                                                {showPassword ? (<Visibility />) : (<VisibilityOff />)}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                >
                                </Input>
                            </div>
                        </div>

                        <div className='login-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant="contained" onClick={handleLogin}>
                                Log in
                            </Button>
                        </div>
                        <div className='login-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                            <p>Click here to log in</p>
                        </div>

                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </div>
    );
};
export default Login;