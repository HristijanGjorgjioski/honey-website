import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {
        flexGrow: 1,
        backgroundColor: '#28334AFF',
        marginBottom: '0',
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
        backgroundColor: '#2a2a9c',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
}));
