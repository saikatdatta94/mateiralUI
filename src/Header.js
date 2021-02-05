import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    title:{
        flexGrow : 1
    }
}))

const Header = ()=>{

    const classes = useStyles();
    

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography  variant="h6" className={classes.title}>
                    News
                </Typography>
                <AcUnitIcon/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;