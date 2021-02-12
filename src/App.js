import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Grid spacing={2} container direction="column">
         <Grid item> 
            <Header/>
         </Grid>
         <Grid item container>
            <Grid item xs={false} sm={2}>
                      
            </Grid>
            <Grid item xs={12} sm={8}>
                  <Content/>
            </Grid>
            <Grid item xs={false} sm={2}>
                        
            </Grid>
         </Grid>
      </Grid>
      
    </>
      
  );
}

export default App;
