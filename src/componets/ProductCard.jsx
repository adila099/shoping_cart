import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { updateProductRequest } from "../redux/action/cartAction";
import { useDispatch } from "react-redux";

const ProductCard = ({
  id,
  title,
  img,
  price,
  description,
  addToCart,
  removeToCart,
  handleEdit, // Rename `edit` to `handleEdit` for clarity
  handleDelete,
}) => {
  const [open, setOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editPrice, setEditPrice] = useState(price);
  const [editDescription, setEditDescription] = useState(description);

  // Handle opening and closing of the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  // Handle updating the product
  const handleUpdate = (id) => {
    dispatch(updateProductRequest(id, editTitle, editPrice, editDescription));
  };

  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={img} />
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
          onClick={() => addToCart(id, title, price, img)}
        >
          Add to Cart
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => removeToCart(id)}
          style={{ marginLeft: "10px" }}
        >
          Remove from Cart
        </Button>

        {/* Edit and Delete Buttons */}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpen} // Open modal on edit
          style={{ marginTop: "10px" }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleDelete(id)}
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Delete
        </Button>
      </CardContent>

      {/* Edit Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="outlined"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            variant="outlined"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProductCard;
