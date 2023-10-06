import React, { useEffect, useState } from "react";
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

import { removeItem, clearCart } from "../../stores/slices/cartSlice";
// import { saveCart } from "../stores/slices/paymentSlice";

import { styles } from "./styles";

const Cart = ({ onCloseDialog }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [productCounts, setProductCounts] = useState({});
    const navigate = useNavigate();

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

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleCheckout = () => {
        dispatch(saveCart(cartItems));
        onCloseDialog();
        navigate("/", { state: { productCounts } });
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container sx={ styles.root}>
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
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { cartItems.map((cartItem) => (
                                    <TableRow key={ cartItem.id }>
                                        <TableCell>{ cartItem.title }</TableCell>
                                        <TableCell align="right">{ cartItem.price }</TableCell>
                                        <TableCell align="right">{ productCounts[cartItem.id] }</TableCell>
                                        <TableCell align="right">
                                            <Fab
                                                color="primary"
                                                size="small"
                                                aria-label="Increment value"
                                                onClick={ () => handleCartAddSubtract(cartItem.id, "ADD") }
                                                sx={ { marginRight: 2 } }
                                            >
                                                <AddIcon />
                                            </Fab>
                                            <Fab
                                                color="primary"
                                                size="small"
                                                aria-label="Decrement value"
                                                onClick={ () =>
                                                    handleCartAddSubtract(cartItem.id, "SUBTRACT")
                                                }
                                                sx={ { marginLeft: 2, marginRight: 2 } }
                                            >
                                                <RemoveIcon />
                                            </Fab>
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
                                onClick={ handleCheckout }
                                sx={ { borderRadius: 12 } }
                            >
                                Checkout
                            </Button>
                        ) }
                        { !isCartEmpty && (
                            <Button
                                variant="contained"
                                onClick={ handleClearCart }
                                sx={ { borderRadius: 12, bgcolor: "red" } }
                            >
                                Clear Items
                            </Button>
                        ) }
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Cart;
