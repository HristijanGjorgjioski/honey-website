import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '10%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            marginTop: '25%'
        }
    }
}));
