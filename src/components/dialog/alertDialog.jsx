import React, {forwardRef, useState} from 'react'
import { useDispatch } from "react-redux";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { clearCart } from "../../stores/slices/cartSlice";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const AlertDialog = ({open,setOpen}) => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
        handleCloseDialog();
    }
    const handleCloseDialog = () => {
        setOpen(false);
    };
    return (
        <>
            <Dialog
                open={ open }
                TransitionComponent={ Transition }
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{ "Clear Cart?" }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        All of the items in the cart will be cleared.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleCloseDialog }>Disagree</Button>
                    <Button onClick={ handleClearCart }>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AlertDialog
