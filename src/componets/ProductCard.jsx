import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProductCard = ({ title, img, price, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img} // Image URL
        alt={title} // Alt text for the image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} {/* Title of the product */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price} {/* Price of the product */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={addToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
