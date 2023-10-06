import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { styles } from "./styles";

const Products = ({ data }) => {
    return (
        <Box sx={ styles.root }>
            { data.map((menuItem) => (
                <div key={ menuItem.id }>
                    <Typography variant="h4" sx={ { textAlign: "center" } }>
                        { menuItem.category }
                    </Typography>
                    <TableContainer component={ Paper }>
                        <Table sx={ { minWidth: 650 } } aria-label="simple table">
                            <TableHead>
                                <TableRow key={ `header-${menuItem.id}` }>
                                    <TableCell>Name</TableCell>
                                    { menuItem.category !== "Momo" &&
                                        menuItem.category !== "Whisky" ? (
                                        <TableCell align="right">Price</TableCell>
                                    ) : null }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { menuItem.items.map((item) => (
                                    <TableRow
                                        key={ `item-${item.id}` }
                                        sx={ { "&:last-child td, &:last-child th": { border: 0 } } }
                                    >
                                        <TableCell component="th" scope="row">
                                            { item.name }
                                        </TableCell>
                                        { menuItem.category === "Momo" ||
                                            menuItem.category === "Whisky"
                                            ? item.types.map((type) => (
                                                <TableRow key={ `type-${type.id}` }>
                                                    <TableCell align="right">{ type.label }</TableCell>
                                                    <TableCell align="right">Rs.{ type.price }</TableCell>
                                                    <TableCell align="right">
                                                        <Button variant="outlined" color="primary">
                                                            Add
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                            : null }
                                        { menuItem.category !== "Momo" &&
                                            menuItem.category !== "Whisky" ? (
                                            <TableCell align="right">Rs.{ item.price }</TableCell>
                                        ) : null }
                                        { menuItem.category !== "Momo" &&
                                            menuItem.category !== "Whisky" ?(
                                            <TableCell align="right">
                                                <Button variant="outlined" color="primary">
                                                    Add
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
