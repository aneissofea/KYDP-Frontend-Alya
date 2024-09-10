// function NewsItem() {
//     return(
//         <p>This is NewsItem</p>
//     );
// };

// export default NewsItem;
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const NewsItem = ({ news }) => {
  return (
    <Card style={{ margin: '10px', width: '100%' }}>
      {/* News Image */}
      <CardMedia
        component="img"
        height="140"
        image={news.urlToImage}
        alt={news.title}
      />
      
      {/* News Content */}
      <CardContent>
        <Typography variant="h6" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {news.description}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {news.publishedAt}
        </Typography>
      </CardContent>

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="bookmark">
          <BookmarkIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default NewsItem;
