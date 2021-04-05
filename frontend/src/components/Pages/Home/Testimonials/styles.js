import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        backgroundColor: '#F65058FF',
        marginTop: '5%',
        marginBottom: '5%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    carousel: {
        width: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid1: {
        backgroundColor: '#edb7e8',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '70px',
        color: 'black',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '30px'
        }
    },
}))
