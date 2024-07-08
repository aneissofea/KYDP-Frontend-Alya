import * as React from 'react';
import { Grid } from '@mui/material';
import MyFavouritesPanel from './MyFavouritesPanel'
import DisplayResults from './DisplayResults';
import Header from './Header';
//import { useState } from 'react';

function Home() {
    
    /**
    const [keyword, setKeyword] = useState({
        keyword: ""
    })

    const keyWord = () => {
        setKeyword()
    };

    const myFavorites = () => {
    };

    const clearmyFavourties = () =>

    */
    return (
        //<div className='input' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
        <Grid container className='main-container' direction={"column"} > {/** main grid */}
            <Grid className="header-container" item lg={1} style={{maxHeight: "10vh"}} >
                <Header />
            </Grid>
            <Grid className="content-container" item lg={11}>
                <Grid container direction='row' style={{height: "100%"}}>
                    <Grid className="left-panel-container" item lg="2.5" >
                        <MyFavouritesPanel style={{overflowY: "scroll"}}
                        //handleSetKeyword={handleSetKeyword}
                        //myFavorites={myFavourites}
                        //clearmyFavourites={clearmyFavourites}
                        ></MyFavouritesPanel>
                    </Grid>    
                
                    <Grid className='results-container' item lg="9.5">
                        <DisplayResults 
                        //keyWord={keyWord}
                        //updatemyFavourites={updatemyFavorites}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;