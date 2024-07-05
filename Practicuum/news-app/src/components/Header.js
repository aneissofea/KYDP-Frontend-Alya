import * as React from 'react';
import { TextField, Grid, Button, Chip } from '@mui/material';
import { useState } from 'react';


function Header() {

    const [keyWord, setKeyWord] = useState({

    });

    const handleSetKeyword = () => {

    };

    const handleLogOut = () => {

    };

    return(
        <Grid container direction='row' style={{display: "flex",
            backgroundColor: "#FFD3B6" }}
             >
            <Grid item xs={2.5} >
                <h3>Find my news!</h3>    
            </Grid>
            <Grid item xs={4}>
                <TextField id="filled-basic" label="Search for news" variant="filled" fullWidth={true}></TextField> 
            </Grid>
            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <Button variant="contained" onClick={handleSetKeyword}>
                    Search
                </Button>
            </Grid>
            <Grid item xs={3} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'right'}}>
                <Chip label="username" />
            </Grid>
            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button variant="contained" onClick={handleLogOut}>
                    Log out
                </Button>
            </Grid>
                
        </Grid>
        
    );

};

export default Header;