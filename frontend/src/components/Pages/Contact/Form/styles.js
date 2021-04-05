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
    form: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    buttonSubmit: {
        width: '30%',
        marginTop: '1%'
    },
    textfield: {
        marginTop: '5px'
    }
}));