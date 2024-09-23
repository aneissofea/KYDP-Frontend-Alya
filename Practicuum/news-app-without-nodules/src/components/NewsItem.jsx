import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import BookmarkIcon from '@mui/icons-material/Bookmark';

const NewsItem = ({ news }) => {
  const handleBookmark = () => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    
    // Avoid duplicates by checking if the article is already saved
    const isAlreadyFavourite = savedFavourites.some(fav => fav.url === news.url);
    if (!isAlreadyFavourite) {
      savedFavourites.push(news);
      localStorage.setItem('favourites', JSON.stringify(savedFavourites));
      alert('Article saved to favourites!');
    } else {
      alert('Article is already in favourites!');
    }
  };
  return (
    <Card style={{ margin: '10px', width: '245px', height:'400px' }}>
      {/* News Image */}
      <CardMedia
        component="img"
        height="140"
        image={news.urlToImage}
        alt={news.title}
      />
      
      {/* News Content */}
      <CardContent>
        <Typography fontFamily='Inter' variant="h6" component="div">{news.title}</Typography>
        {/* <Typography variant="body2" color="textSecondary">{news.description}</Typography> */}
        <Typography variant="caption" color="textSecondary">{news.publishedAt}</Typography>
      </CardContent>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <IconButton aria-label="add to favorites" onClick={handleBookmark}>
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="bookmark">
          <BookmarkIcon />
        </IconButton> */}
      </div>
    </Card>
  );
};

export default NewsItem;