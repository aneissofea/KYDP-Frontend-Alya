import React from 'react';
//import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import { Card, CardHeader, CardMedia, Avatar, CardContent, CardActions, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors'

const NewsItem = ({ news, updateFavourites }) => {
  // const handleBookmark = () => {
  //   const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    
  //   // Avoid duplicates by checking if the article is already saved
  //   const isAlreadyFavourite = savedFavourites.some(fav => fav.url === news.url);
  //   if (!isAlreadyFavourite) {
  //     savedFavourites.push(news);
  //     //localStorage.setItem('favourites', JSON.stringify(savedFavourites));
  //     alert('Article saved to favourites!');
  //   } else {
  //     alert('Article is already in favourites!');
  //   }
  // };
  const addToFavourites = () => {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      favourites.push(news);
      // localStorage.setItem('favourites', JSON.stringify(favourites));
      updateFavourites(favourites);
  }

  const formatDate = () => {
      //   Valid from : {`${new Date(contract.rentalObject.rentalPeriodStart).getDate()}/${new Date(contract.rentalObject.rentalPeriodStart).getMonth() +1}/${new Date(contract.rentalObject.rentalPeriodStart).getFullYear()}`}
      let day = new Date(news.publishedAt).getDate();
      let month = new Date(news.publishedAt).getMonth();
      let year = new Date(news.publishedAt).getFullYear();
      let formattedDate = `${day}-${month}-${year}`;
      return formattedDate;
  }

  const getFirstLetter = () => {
      let letter = news?.source?.name?.toString()?.charAt(0);
      return letter;
  }
  return (
    // <Card style={{ margin: '10px', width: '210px' }}>
    //   {/* News Image */}
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image={news.urlToImage}
    //     alt={news.title}
    //   />
      
    //   {/* News Content */}
    //   <CardContent>
    //     <Typography variant="h6" component="div">{news.title}</Typography>
    //     <Typography variant="body2" color="textSecondary">{news.description}</Typography>
    //     <Typography variant="caption" color="textSecondary">{news.publishedAt}</Typography>
    //   </CardContent>

    //   {/* Action Buttons */}
    //   <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
    //     <IconButton aria-label="add to favorites" onClick={handleBookmark}>
    //       <FavoriteIcon />
    //     </IconButton>
    //   </div>

    // </Card>
        <Card>
            <CardMedia 
                component='img'
                height='194'
                image={news.urlToImage}
            />
            
            <CardContent>
                <a href={news.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {news.title}
                </a>
            </CardContent>

            <CardHeader
                avatar={
                    <Avatar sx= {{ bgcolor: red[500]}} aria-label="source">
                        {getFirstLetter()}
                    </Avatar>
                }
                title={news.source.name}
                subheader={formatDate()}
            />

            <CardActions>
                <IconButton aria-label="add to favourites" onClick={addToFavourites}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions> 
        </Card>
  );
};

export default NewsItem;
