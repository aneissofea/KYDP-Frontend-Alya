import { Grid, Button, List, ListItem, ListItemText} from "@mui/material";
import React, { useState, useEffect } from "react";

function MyFavouritesPanel() {

    const [favourites, setFavourites] = useState([]);

    // Fetch favorites from localStorage on component mount
    useEffect(() => {
        const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
        setFavourites(savedFavourites);
    }, []);

    // Handle clearing all favourites
    const handleClearFavourites = () => {
        localStorage.removeItem('favourites');
        setFavourites([]);
    };

    // Handle opening a news article in a new tab
    const openArticle = (url) => {
        window.open(url, '_blank');
    };

    return(
        <Grid container direction='row' style={{display: "flex", backgroundColor: "#fff", minHeight: "100vh", paddingLeft: '10px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)'}}>
            <Grid >
                <h3 style={{ fontFamily: 'Inter', color: '#333',  }}>My Favourites:</h3>
                <Button variant="contained" onClick={handleClearFavourites} 
                disabled={favourites.length === 0} sx={{ 
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
            {favourites.length === 0 ? (
                <p>No favorites saved yet!</p>
            ) : (
            <List>
                {favourites.map((article, index) => (
                    <ListItem 
                        button 
                        key={index} 
                        onClick={() => openArticle(article.url)} 
                        style={{ cursor: 'pointer' }}
                        >
                        <ListItemText 
                            primary={article.title} 
                            secondary={article.source.name} 
                        />
                    </ListItem>
                ))}
            </List>
            )}
        </Grid>
        
    );
};

export default MyFavouritesPanel;