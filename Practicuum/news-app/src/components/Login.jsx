import * as React from 'react';
import { Button, IconButton, Input, InputAdornment, TextField, Alert } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Login = () => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        showPassword: false,
        isLoggedIn: false
    });

    const showPasswordHandler = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const mouseDownPasswordHandler = (event) => {
        event.preventDefault();
    };

    //TODO understand this 
    const inputChangeHandler = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value
        });
    };

    const validatePassword = () => {
        console.log(values.username, values.password)
        
        if (values.username === 'alyam' && values.password === 'password123') {
            
            setValues({...values, isLoggedIn: "true"})
            console.log("success!")
            console.log(values.isLoggedIn)
            //TODO enter Navigate to home*/
        }
        else {
            <Alert severity="warning">Wrong username and password</Alert>
        }
    };



    return(
        <div className='container'>
            <Grid container spacing={2}>
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
                                <TextField id="outlined-basic" label="Username" variant="standard" onChange={inputChangeHandler("username")}/>
                            </div>
                            <div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                                <Input
                                    type={values.showPassword ? "text" : "password"} 
                                    placeholder='Password'
                                    size='lg'
                                    onChange={inputChangeHandler("password")}
                                    value={values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={showPasswordHandler}
                                                onMouseDown={mouseDownPasswordHandler} >
                                                {values.showPassword ? (<Visibility />) : (<VisibilityOff />)}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                >
                                </Input>
                            </div>
                        </div>

                        <div className='login-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Button variant="contained" onClick={validatePassword}>
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