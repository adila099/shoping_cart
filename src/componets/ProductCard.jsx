import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ id, title, img, price, addToCart, removeToCart , edit , deleteCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => addToCart(id, title, price, img)}  // Pass id, title, and price to addToCart
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => removeToCart(id)}  // Pass only id to removeToCart
          style={{ marginLeft: '10px' }}
        >
          Remove from Cart
        </Button>





        <Button
          variant="outlined"
          color="primary"
          onClick={() => edit(id)}  // Pass id, title, and price to addToCart
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => deleteCart(id)}  // Pass only id to removeToCart
          style={{ marginLeft: '10px' }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
