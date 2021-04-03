import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '10px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    cardMedia: {
        width: '100%',
        height: '400px',
        filter: 'brightness(50%)'
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
    }
}))
