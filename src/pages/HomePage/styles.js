export const styles = {
    root: {
        background: 'url(theme.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
        position: 'relative'


    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)'
    },

    title: {
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'

    },
    image: {
        maxWidth: '100%',
        height: '250px'
    },


    button: {
        color: '#ffffff',
        margin: '25px',
        borderColor: '#ffffff',
        '&:hover': {
            borderColor: '#C8FCEA'
        }

    },

    button2: {
        color: '#000000',
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#C8FCEA'
        }

    }
};
