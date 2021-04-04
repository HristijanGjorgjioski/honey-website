import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        width: '100%',
        padding: 0,
        border: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: '100vh',
        width: '100%',
        margin: 0,
        filter: 'brightness(40%)'
    },
    title: {
        position: 'absolute',
        fontSize: '150px',
        color: 'white',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            color: '#aab5ad',
            transform: 'scale(1.1)'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px'
        }
    },
    subtitle: {
        position: 'absolute',
        color: '#e9fa2a',
        marginTop: '13%',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            color: '#b2b509',
            transform: 'scale(1.2)'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '20%'
        }
    }
}));
