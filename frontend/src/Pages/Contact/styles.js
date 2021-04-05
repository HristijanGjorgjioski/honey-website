import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginTop: '9%',
        marginBottom: '7%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            marginTop: '13%'
        }
    },
    title: {
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
            marginBottom: '4%'
        }
    },
    form: {
        width: '40%',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    }
}));
