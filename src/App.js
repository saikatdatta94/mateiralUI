import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
         <Grid item>
            <Header/>
         </Grid>
         <Grid item container>
            <Grid item xs={12} sm={4}>
              Item 1
            </Grid>
            <Grid item xs={12} sm={4}>
              Item 2
            </Grid>
            <Grid item xs={12} sm={4}>
              Item 3
            </Grid>
         </Grid>
      </Grid>
    </div>
  );
}

export default App;
