import React, { useEffect, useState, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { removeItem } from "../../stores/slices/cartSlice";
import { saveCart } from "../../stores/slices/paymentSlice";
import AlertDialog from "../dialog/alertDialog";

import { styles } from "./styles";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />;
});

const Cart = ({ onCloseDialog }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [productCounts, setProductCounts] = useState({});
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const initialCounts = {};
        cartItems.forEach((cartItem) => {
            initialCounts[cartItem.id] = 1;
        });
        setProductCounts(initialCounts);
    }, [cartItems]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeItem(productId));
    };

    const handleCartAddSubtract = (productId, type) => {
        const updatedCounts = { ...productCounts };
        if (type === 'ADD') {
            updatedCounts[productId]++;
        } else if (type === 'SUBTRACT' && updatedCounts[productId] > 1) {
            updatedCounts[productId]--;
        }
        setProductCounts(updatedCounts);
    }

    const isCartEmpty = cartItems.length === 0;

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleConfirmOrder = () => {
        dispatch(saveCart(cartItems));
        onCloseDialog();
        setSnackbarOpen(true);
        navigate("/bill", { state: { productCounts } });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={ styles.root }>
                <Box sx={ { flexGrow: 1 } }>
                    <Typography variant="h3" gutterBottom sx={ { justifyContent: "center", justifyItems: "center" } }>
                        Your Orders
                    </Typography>

                    <TableContainer component={ Paper }>
                        <Table sx={ { minWidth: 650 } } aria-label="cart table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Products</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Total Price</TableCell>
                                    <TableCell align="right">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { cartItems.map((cartItem) => (
                                    <TableRow key={ cartItem.id }>
                                        <TableCell>{ cartItem.label ? `${cartItem.label} ${cartItem.name}` : cartItem.name }</TableCell>
                                        <TableCell align="right">{ cartItem.price }</TableCell>
                                        <TableCell align="center"><Fab
                                            color="primary"
                                            size="small"
                                            aria-label="Decrement value"
                                            onClick={ () =>
                                                handleCartAddSubtract(cartItem.id, "SUBTRACT")
                                            }
                                            sx={ { marginRight: 2 } }
                                        >
                                            <RemoveIcon />
                                        </Fab>
                                            { productCounts[cartItem.id] }
                                            <Fab
                                                color="primary"
                                                size="small"
                                                aria-label="Increment value"
                                                onClick={ () => handleCartAddSubtract(cartItem.id, "ADD") }
                                                sx={ { marginLeft: 2, marginRight: 2 } }
                                            >
                                                <AddIcon />
                                            </Fab></TableCell>
                                        <TableCell align="center">{ cartItem.price * productCounts[cartItem.id] }</TableCell>
                                        <TableCell align="right">
                                            <Fab
                                                color="primary"
                                                size="small"
                                                aria-label="Remove from cart"
                                                onClick={ () => handleRemoveFromCart(cartItem.id) }
                                                sx={ { bgcolor: "red" } }
                                            >
                                                <DeleteIcon />
                                            </Fab>
                                        </TableCell>
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={ { display: "flex", justifyContent: "space-between", mt: 5 } }>
                        { !isCartEmpty && (
                            <Button
                                variant="contained"
                                onClick={ handleConfirmOrder }
                                sx={ { borderRadius: 12 } }
                            >
                                Confirm Order
                            </Button>
                        ) }
                        { !isCartEmpty && (
                            <Button
                                variant="contained"
                                onClick={ handleClickOpenDialog }
                                sx={ { borderRadius: 12, bgcolor: "red" } }
                            >
                                Clear Items
                            </Button>
                        ) }
                        <Snackbar
                            open={ snackbarOpen }
                            autoHideDuration={ 6000 }
                            onClose={ handleCloseSnackbar }
                        >
                            <MuiAlert
                                onClose={ handleCloseSnackbar }
                                severity="success"
                                sx={ { width: '100%' } }
                            >
                                Your Order has been placed
                            </MuiAlert>
                        </Snackbar>
                    </Box>
                </Box>
            </Container>
            <AlertDialog open={ open } setOpen={setOpen} />
        </React.Fragment>
    );
};

export default Cart;