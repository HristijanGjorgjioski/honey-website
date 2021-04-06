import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        marginBottom: 0,
        marginTop: '3%',
        position: 'static',
        minHeight: '25vh',
        flexGrow: 1,
        backgroundColor: '#28334AFF',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    gridContainer: {
        padding: '10px'
    },
    gridItem: {
        padding: '10px',
        //backgroundColor: '#2a2a9c',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: '#b3c9b9',
        marginBottom: '2%'
    },
    text: {
        color: '#b3c9b9',
        textDecoration: 'none',
    },
    link: {
        color: '#b3c9b9',
    }
}));
