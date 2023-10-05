import React, {forwardRef} from 'react';

import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';

import Cart from '../cart/cart';

import { styles } from './styles';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const CartDialog = ({ open, onClose }) => {
    return (
        <Dialog fullScreen open={ open } onClose={ onClose } TransitionComponent={ Transition }>
            <AppBar sx={ styles.appbar }>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={ onClose } aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={ { ml: 2, flex: 1 } } variant="h6" component="div">
                        Your Orders
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <Cart onCloseDialog={ onClose } />
            </List>
        </Dialog>
    );
};

export default CartDialog;
