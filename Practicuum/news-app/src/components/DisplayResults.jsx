import React from 'react';
import { Grid, Chip } from "@mui/material";
import NewsItem from './NewsItem';

const DisplayResults = ({ newsList, savedFavourites, handleLoadMore }) => {
    return(
        <>
            <Grid 
            container 
            direction='row' 
            style={{display: "flex",backgroundColor: "#3FCF8F3", paddingLeft: '10px'}}>
                {newsList.map((newsItem) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={newsItem.url}>
                        <NewsItem news={newsItem} savedFavourites={savedFavourites}/>
                    </Grid>
                ))}            
            </Grid>

            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{display: "flex",backgroundColor: "#3FCF8F3", marginTop: "10px" }}>
                <Chip label="Load more" onClick={handleLoadMore}/>
            </Grid>
        </>
    );
};

export default DisplayResults;