import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        backgroundColor: '#dbd8ce',
        marginTop: '5%',
        marginBottom: '5%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    grid: {
        marginTop: '10px',
        marginBottom: '10px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: '120px',
        color: 'black',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '70px'
        }
    },
    cardMedia: {
        width: '100%',
        height: '400px',
        filter: 'brightness(50%)',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.04)'
        },
    },
    text: {
        position: 'absolute',
        fontSize: '25px',
        color: 'white',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            color: '#aab5ad',
            transform: 'scale(1.1)'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        }
    },
}))
