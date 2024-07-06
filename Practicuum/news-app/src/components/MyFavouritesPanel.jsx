import { Grid, Button } from "@mui/material";
import { useState } from "react";

function MyFavouritesPanel() {

    const [favouriteslist, setFavouriteslist] = useState({});

    const handleClear = () => {
        
    };

    return(
        <Grid container direction='row' style={{display: "flex", backgroundColor: "#698474" }}>
            <h3>My Favourites:</h3>
            <Button variant="contained" onClick={handleClear}>
                Search
            </Button>
        </Grid>
        
    );
};

export default MyFavouritesPanel;