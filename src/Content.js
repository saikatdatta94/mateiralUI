import React from 'react';
import Grid from '@material-ui/core/Grid';
import CofeeCard from "./CofeeCard";
import coffeeMakerList from "./constant";

const Content = () =>{

    const getCoffeeCard = (coffeeMakerObject) => {
        return (
            <Grid item xs={12} sm={4}>
                <CofeeCard {...coffeeMakerObject} />
            </Grid>
        )

    }

    return(
        <Grid container spacing={2}>
            
            {coffeeMakerList.map((coffeeMakerObject)=> getCoffeeCard(coffeeMakerObject))} 
            
        </Grid>
          
               
    );
    
}
export default Content;