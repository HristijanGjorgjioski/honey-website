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
    mainGrid: {
        marginBottom: '10px'
    },
    grid1: {
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    },
    title: {
        fontSize: '40px'
    }
}))
