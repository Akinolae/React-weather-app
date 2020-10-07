import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    div: {
        width: "60%",
        margin: 'auto',

    },
    btn: {
        width: '20%',
        height: '40px',
        outline: 'none',
        borderRadius: "16px",
        margin: '20px auto'
    },
    style: {
        color: 'green',
        fontFamily: 'sans-serif',
        textAlign: 'center'
      }, 
      input: {
        width: '100%',
        backgroundColor: "lightgrey",
      },
    form: {
        width: '50%',
        margin: 'auto',
        display: 'flex',
    }
}))

export default useStyle;