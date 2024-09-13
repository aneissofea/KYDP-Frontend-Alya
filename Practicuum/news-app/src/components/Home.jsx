
    //import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import MyFavouritesPanel from './MyFavouritesPanel'
import DisplayResults from './DisplayResults';
import Header from './Header';
//import { useState } from 'react';

function Home({handleLogOut, setSearchKeyword, handleSearchNews}) {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        // Fetch news from an API (e.g., NewsAPI)
        fetch('https://newsapi.org/v2/everything?q=olympics&apiKey=97e5c682785e4de1a9c3c0b75f7271e7')
        .then(response => response.json())
        .then(data => setNewsList(data.articles));
    }, []);

    return (
        //<div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
        <Grid container className='main-container' direction={"column"} > {/** main grid */}
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}} >
                <Header handleLogOut={handleLogOut} setSearchKeyword={setSearchKeyword} handleSearchNews={handleSearchNews}/>
            </Grid>
            <Grid className="content-container" item lg={11}>
                <Grid container direction='row' style={{height: "100%"}}>
                    <Grid className="left-panel-container" item lg="2.3" >
                        <MyFavouritesPanel style={{overflowY: "scroll", position: 'fixed', height: "100vh"}}
                        //handleSetKeyword={handleSetKeyword}
                        //myFavorites={myFavourites}
                        //clearmyFavourites={clearmyFavourites}
                        ></MyFavouritesPanel>
                    </Grid>    
                
                    <Grid className='results-container' item lg="9.7">
                        <DisplayResults 
                        //keyWord={keyWord}
                        //updatemyFavourites={updatemyFavorites}
                        newsList={newsList}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
