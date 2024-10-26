import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Modal,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCartSuccess } from "../redux/action/cartAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { cart, totalCount } = useSelector((state) => state.cart)

  const removeItems = () => {
    dispatch(clearCartSuccess());
  };




  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} >
            MyShop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/todo')}>
            Todu
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/counter')}>
            Counter
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/buy')}>
            Shopping
          </Typography>
          <IconButton color="inherit" edge="end" onClick={handleOpen}>
            {/* Badge to show the cart count */}
            <Badge badgeContent={totalCount || 0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 500, maxHeight: '80vh', overflowY: 'auto', p: 3, borderRadius: 2 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Your Cart Items
          </Typography>

          {cart?.length > 0 ? (
            <>
              <List sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 1 }}>
                {cart?.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem>
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={3}>
                          {/* Display a placeholder or product image */}
                          <Avatar
                            variant="rounded"
                            sx={{ width: 64, height: 64, borderRadius: 1 }}
                            src={item?.img || "/default-product.png"} // replace with the actual product image URL
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <ListItemText
                            primary={item.title}
                            secondary={`Price: $${item.price} | Quantity: ${item.count}`}
                            primaryTypographyProps={{ fontWeight: "bold" }}
                            secondaryTypographyProps={{ color: "text.secondary" }}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="body2" align="right" fontWeight="bold">
                            Total: ${(item.price * item.count).toFixed(2)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>

              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="secondary" fullWidth onClick={removeItems} sx={{ py: 1.5 }}>
                  Empty Cart 🗑️
                </Button>
              </Box>
            </>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              Your cart is empty.
            </Typography>
          )}
        </Box>
      </Modal>

    </>
  );
};

export default Nav;
