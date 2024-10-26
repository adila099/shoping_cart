import React from 'react';
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
  ListItemAvatar,
  Avatar,
  Grid,
  Divider,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const Nav = ({ cartCount, test }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyShop
          </Typography>
          <IconButton color="inherit" edge="end" onClick={handleOpen}>
            {/* Badge to show the cart count */}
            <Badge badgeContent={cartCount} color="error">
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Your Cart Items
          </Typography>

          {test?.length > 0 ? (
            <>
              <List>
                {test.map((item) => (
                  <React.Fragment key={item.id}>
                    <ListItem>
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={3}>
                          {/* Display a placeholder or product image */}
                          <Avatar
                            variant="rounded"
                            sx={{ width: 64, height: 64 }}
                            src={item?.img || '/default-product.png'} // replace with the actual product image URL
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <ListItemText
                            primary={item.title}
                            secondary={`Price: $${item.price} | Quantity: ${item.count}`}
                            primaryTypographyProps={{ fontWeight: 'bold' }}
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
                <Button variant="contained" color="primary" fullWidth>
                  Proceed to Checkout
                </Button>
              </Box>
            </>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your cart is empty.
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Nav;
