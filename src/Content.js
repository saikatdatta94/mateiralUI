import React from 'react';
import Grid from '@material-ui/core/Grid';
import CofeeCard from "./CofeeCard";
const Content = () =>{

    return(
          <Grid item xs={12} sm={4}>
                    <CofeeCard/>
          </Grid>
               
    );
    
}
export default Content;