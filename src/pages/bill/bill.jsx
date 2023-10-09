import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items?.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const bill = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const productCounts = location.state.productCounts;
    const rows = cartItems.map((cartItem) => createRow(cartItem.title, productCounts[cartItem.id], cartItem.price));

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    const handleCancel = () => {
        navigate("/");
    };

    const handleProceedToPayment = () => {
        navigate('/bill/payment')
    }
    
  return (
    <>
          <TableContainer component={ Paper }>
              <Table sx={ { minWidth: 700 } } aria-label="spanning table">
                  <TableHead>
                      <TableRow>
                          <TableCell align="center" colSpan={ 3 }>
                              Details
                          </TableCell>
                          <TableCell align="right">Price</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Products</TableCell>
                          <TableCell align="right">Qty.</TableCell>
                          <TableCell align="right">Unit</TableCell>
                          <TableCell align="right">Sum</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      { rows?.map((row) => (
                          <TableRow key={ row.desc }>
                              <TableCell>{ row.desc }</TableCell>
                              <TableCell align="right">{ row.qty }</TableCell>
                              <TableCell align="right">{ ccyFormat(row.unit) }</TableCell>
                              <TableCell align="right">{ ccyFormat(row.price) }</TableCell>
                          </TableRow>
                      )) }
                      <TableRow>
                          <TableCell rowSpan={ 3 } />
                          <TableCell colSpan={ 2 }>Subtotal</TableCell>
                          <TableCell align="right">{ ccyFormat(invoiceSubtotal) }</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Tax</TableCell>
                          <TableCell align="right">{ `${(TAX_RATE * 100).toFixed(0)} %` }</TableCell>
                          <TableCell align="right">{ ccyFormat(invoiceTaxes) }</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell colSpan={ 2 }>Total</TableCell>
                          <TableCell align="right">{ ccyFormat(invoiceTotal) }</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
          <Box>
              <Button
                  onClick={ handleCancel }
              >Cancel</Button>
              <Button
                  onClick={ handleProceedToPayment }
              >Proceed Payment</Button>
          </Box>
    </>
  )
}

export default bill
