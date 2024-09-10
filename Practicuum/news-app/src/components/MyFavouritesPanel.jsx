import { Grid, Button } from "@mui/material";
import { useState } from "react";

function MyFavouritesPanel() {

    const [myFavourites, setFavourites] = useState({});

    //set localStorage myfavourites

    const handleClear = () => {
      //setFavourites({""})  
    };

    return(
        <Grid container direction='row' style={{display: "flex", backgroundColor: "#fff", minHeight: "100vh", paddingLeft: '10px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)'}}>
            <Grid >
                <h3 style={{ fontFamily: 'Inter', color: '#333',  }}>My Favourites:</h3>
                <Button variant="contained" onClick={handleClear} sx={{ 
                fontFamily: 'Inter', 
                backgroundColor: '#04DB9B',  
                color: '#fff',               
                borderRadius: '8px',        
                padding: '10px 20px',        
                '&:hover': {
                    backgroundColor: '#006346', 
                }
                }}>
                    Clear
                </Button>
            </Grid>
        </Grid>
        
    );
};

export default MyFavouritesPanel;