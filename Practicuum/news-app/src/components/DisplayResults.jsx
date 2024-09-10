import { Grid } from "@mui/material";

function DisplayResults({ newsList }) {

    return(
        <Grid container direction='row' style={{display: "flex",backgroundColor: "#3FCF8F3", paddingLeft: '10px'}}>
            <h3 style={{ fontFamily: 'Inter', color: '#333',  }}>This is DisplayResults:</h3>
            
        </Grid>
    );
};

export default DisplayResults;