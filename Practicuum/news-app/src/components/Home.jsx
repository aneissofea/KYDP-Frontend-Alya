//import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import MyFavouritesPanel from './MyFavouritesPanel'
import DisplayResults from './DisplayResults';
import Header from './Header';
//import { useState } from 'react';

function Home({handleLogout}) {
    const [newsList, setNewsList] = useState([]);
    //set the states for in Home that needs to be passed to Header, My Favourites Panel, and Display Results 
    const [myFavourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) || []);
    const [searchKeyword, setSearchKeyword] = useState('');

    //variables for the api call
    const APIKey = '97e5c682785e4de1a9c3c0b75f7271e7';
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);

    //call the API and store the news here
    const fetchNews = async (pageNumber) => {
        const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${APIKey}&sortBy=publishedAt&q=${searchKeyword}&pageSize=8&page=${page}`);
        const data = await response.json();
        pageNumber ? setNews(prevNews => ([...prevNews, ...data.articles])) : setNews(data?.articles)
        console.log('news fetched');
    };

    //set keyword when search button is pressed
    const handleSearchNews = () => {        
        setSearchKeyword(searchKeyword);
        console.log('in Home component handleSearchKeyword function. Keyword is ' + searchKeyword);
        fetchNews();
    }

    useEffect(() => {
        if (searchKeyword && page) {
            console.log('in Home component useEffect before fetching news');
            fetchNews(page);
        }
    }, [page]);

    const savedFavourites = (newFavourites) => {
        setFavourites(newFavourites);
        localStorage.setItem('favourites', JSON.stringify(newFavourites));
    };
    
    // Handle clearing all favourites
    const clearFavourites = () => {
        setFavourites([]);
        console.log(myFavourites);
        localStorage.removeItem('favourites');
    };
    
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        //<div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
        <Grid container className='main-container' direction={"column"} > {/** main grid */}
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}} >
                <Header handleLogout={handleLogout} setSearchKeyword={setSearchKeyword} handleSearchNews={handleSearchNews}/>
            </Grid>

            <Grid className="content-container" item lg={11}>
                <Grid container direction='row' style={{height: "100%"}}>
                    <Grid className="left-panel-container" item lg="2.3" >
                        <MyFavouritesPanel style={{overflowY: "scroll", position: 'fixed'}}
                        style={{overflowY: "scroll"}}
                        myFavourites={myFavourites}
                        clearFavourites={clearFavourites}
                        ></MyFavouritesPanel>
                    </Grid>    
                
                    <Grid className='results-container' item lg="9.7">
                        <DisplayResults 
                        //keyWord={keyWord}
                        //updatemyFavourites={updatemyFavorites}
                        newsList={newsList}
                        savedFavourites={savedFavourites}
                        handleLoadMore={handleLoadMore}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;