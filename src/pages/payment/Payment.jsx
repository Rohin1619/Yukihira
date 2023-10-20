import React, { useState } from 'react';

import { useLocation } from "react-router-dom";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styles } from './styles';

const Payment = () => {
    const digitalpay = [
        {
            label: 'Esewa',
            Image: 'Esewa.jpg'
        },
        {
            label: 'Khalti',
            Image: 'Khalti.jpg'
        },
        {
            label: 'Bank',
            Image: 'Bank.jpg'
        }
    ]

    const [selectedDigitalPay, setSelectedDigitalPay] = useState(null);
    const location = useLocation();
    const [modalControl, setModalControl] = useState(false);
    const total = location.state.total

    const handleClickOpen = (pay) => {
        setSelectedDigitalPay(pay);
        setModalControl(!modalControl)
    };

    const handleClose = () => {
        setSelectedDigitalPay(null);
        setModalControl(!modalControl)
    };

    return (
        <>
            <Box sx={styles.box}>
                <Typography variant='h3'> Your total is: {total}</Typography>
                <Typography variant='h6'>Choose your payment method!</Typography>
                { digitalpay.map((pay) => (
                    <Button key={ pay.label } onClick={ () => handleClickOpen(pay) }>{ pay.label }</Button>
                )) }
            </Box>
            <Dialog onClose={ handleClose } open={ modalControl }>
                <DialogTitle sx={ { m: 0, p: 2 } }>{ selectedDigitalPay?.label }</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={ handleClose }
                    sx={ {
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    } }
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers sx={ { objectFit: 'contain', height: 700 } }>
                    { selectedDigitalPay && (
                        <img src={ `/${selectedDigitalPay.Image}` } alt={ selectedDigitalPay.label }
                            style={ styles.img } />
                    ) }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Payment
