import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
            marginBottom: '4%'
        }
    },
}));
