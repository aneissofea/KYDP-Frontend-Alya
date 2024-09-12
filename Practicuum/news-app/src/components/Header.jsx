import * as React from 'react';
import { TextField, Grid, Button, Chip } from '@mui/material';
import { useState } from 'react';


function Header({ setSearchKeyword,}) {

    const [keyWord, setKeyWord] = useState({

    });

    const handleSearchNews = () => {

    };

    const handleLogOut = () => {

    };

    return(
        <Grid container direction='row' style={{display: "flex", backgroundColor: "#04DB9B", paddingLeft: '10px' }}>
            <Grid item xs={2.5} >
                <h3 style={{ fontFamily: 'Inter', fontSize: '20px', color: '#333',  }}>Brand News</h3>    
            </Grid>
            <Grid item xs={4} style={{height:'10px' }}>
                <TextField 
                id="filled-basic" 
                onChange={(e) => setSearchKeyword(e.target.value)} 
                label="Search for news" 
                variant="filled" 
                fullWidth={true}>
                </TextField> 
            </Grid>
            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <Button variant="contained" onClick={handleSearchNews} sx={{ 
                fontFamily: 'Inter', 
                backgroundColor: '#ffffff',  
                color: '#006346',               
                borderRadius: '6px',        
                padding: '10px 20px',        
                '&:hover': {
                    backgroundColor: '#333',
                    color: '#fff', 
                }
                }}>
                    Search
                </Button>
            </Grid>
            <Grid item xs={3} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Chip label={localStorage.getItem('username')} />
            </Grid>

            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button variant="contained" onClick={handleLogOut} sx={{ 
                fontFamily: 'Inter', 
                backgroundColor: '#ffffff',  
                color: '#006346',               
                borderRadius: '6px',        
                padding: '10px 20px',        
                '&:hover': {
                    backgroundColor: '#333',
                    color: '#fff', 
                }
                }}>
                    Log out
                </Button>
            </Grid>
                
        </Grid>
        
    );

};

export default Header;