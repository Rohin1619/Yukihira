import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { addItem } from '../../stores/slices/cartSlice';

import { styles } from "./styles";

const Products = ({ data}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)
    const hasType = ['Momo', 'Whisky']

    const handleAddToCart1 = (type, item) => {
        const isProductInCart = cartItems.some((cartItem) => cartItem.id === type.id);

        if (!isProductInCart) {
            dispatch(addItem({...type,name:item}, item));
        }
    };

    const handleAddToCart2 = (item) => {
        const isProductInCart = cartItems.some((cartItem) => cartItem.id === item.id);

        if (!isProductInCart) {
            dispatch(addItem(item));
        }
    };

    return (
        <Box sx={ styles.root }>
            { data.map((menuItem) => (
                <div key={ menuItem.id }>
                    <Typography variant="h4" sx={ styles.item }>
                        { menuItem.category }
                    </Typography>
                    <TableContainer component={ Paper } >
                        <Table sx={ styles.table } aria-label="simple table">
                            <TableBody sx={ styles.tablebody }>
                                { menuItem.items.map((item) => (
                                    <TableRow key={ `item-${item.id}` } sx={ styles.namerow } >
                                        <TableCell component="th" scope="row" sx={styles.itemName}>
                                            { item.name }
                                        </TableCell>
                                        { hasType.includes(menuItem.category)
                                            ? item.types.map((type) => (
                                                <TableRow key={ `type-${type.id}` } sx={ styles.typerow }>
                                                    <TableCell align="right" sx={styles.label}>{ type.label }</TableCell>
                                                    <TableCell align="right" sx={styles.labelPrice}>Rs.{ type.price }</TableCell>
                                                    <TableCell align="right" sx={ styles.btn1 }>
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            onClick={ () => handleAddToCart1(type, item.name) }
                                                            disabled={ cartItems.some((cartItem) => cartItem.id === type.id) }>
                                                            { cartItems.some((cartItem) => cartItem.id === type.id) ? "In Cart" : "Add" }
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                            : <TableCell align="right" sx={styles.itemPrice}>Rs.{ item.price }</TableCell> }
                                        { !hasType.includes(menuItem.category) ? (
                                            <TableCell align="right" sx={styles.btn1}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={ () => handleAddToCart2(item) }
                                                    disabled={ cartItems.some((cartItem) => cartItem.id === item.id) }
                                                >
                                                    { cartItems.some((cartItem) => cartItem.id === item.id) ? "In Cart" : "Add" }
                                                </Button>
                                            </TableCell>
                                        ) : null }
                                    </TableRow>
                                )) }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )) }
        </Box>
    );
};
export default Products;
