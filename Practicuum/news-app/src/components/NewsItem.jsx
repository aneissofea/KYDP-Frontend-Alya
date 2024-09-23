import React, {useState, useEffect} from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import BookmarkIcon from '@mui/icons-material/Bookmark';

const NewsItem = ({ news, updatemyFavourites  }) => {
  // const handleBookmark = () => {
  //   const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    
  //   // Avoid duplicates by checking if the article is already saved
  //   const isAlreadyFavourite = savedFavourites.some(fav => fav.url === news.url);
  //   if (!isAlreadyFavourite) {
  //     savedFavourites.push(news);
  //     localStorage.setItem('favourites', JSON.stringify(savedFavourites));
  //     alert('Article saved to favourites!');
  //   } else {
  //     alert('Article is already in favourites!');
  //   }
  // };

  const [isFavorited, setIsFavorited] = useState(false);

  // Check if the article is already in favourites on component mount
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    const isAlreadyFavourite = savedFavourites.some(fav => fav.url === news.url);
    setIsFavorited(isAlreadyFavourite);
  }, [news.url]);

  const handleBookmark = () => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];

    if (isFavorited) {
      // Remove the article from favourites
      const updatedFavourites = savedFavourites.filter(fav => fav.url !== news.url);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsFavorited(false);
      alert('Article removed from favourites.');
    } else {
      // Add the article to favourites
      savedFavourites.push(news);
      localStorage.setItem('favourites', JSON.stringify(savedFavourites));
      setIsFavorited(true);
      alert('Article saved to favourites!');
    }

    // Update the MyFavouritesPanel
    if (updatemyFavourites) updatemyFavourites();
  };
 
  return (
    <Card style={{ margin: '10px', width: '245px', height:'400px' }}>
      {/* News Image */}
      <CardMedia
        component="img"
        height="140"
        //image={news.urlToImage || 'https://via.placeholder.com/150'}
        image={news.urlToImage ? news.urlToImage : 'https://via.placeholder.com/245x140.png?text=No+Image'} // Fallback to placeholder image
        alt={news.title}
      />
      
      {/* News Content */}
      <CardContent>
        <Typography fontFamily='Inter' variant="h6" component="div">{news.title}</Typography>
        {/* <Typography variant="body2" color="textSecondary">{news.description}</Typography> */}
        {/* <Typography variant="caption" color="textSecondary">{news.publishedAt}</Typography> */}
        <Typography variant="caption" color="textSecondary">
          {new Date(news.publishedAt).toLocaleDateString()}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <IconButton 
        aria-label="add to favorites" 
        onClick={handleBookmark} 
        color={isFavorited ? 'error' : 'default'}>    
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