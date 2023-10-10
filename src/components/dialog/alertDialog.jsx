import React from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useDispatch } from 'react-redux';

import { clearCart } from "../../stores/slices/cartSlice";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const alertDialog = (open, onClose) => {
    const dispatch = useDispatch();


    const handleClearCart = () => {
        dispatch(clearCart());
        handleCloseConfirmDialog();
    }


    return (
        <>
            <Dialog
                open={ open }
                TransitionComponent={ Transition }
                keepMounted
                onClose={ onClose }
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{ "Use Google's location service?" }</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Clear Cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ onClose }>Disagree</Button>
                    <Button onClick={ handleClearCart }>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default alertDialog
