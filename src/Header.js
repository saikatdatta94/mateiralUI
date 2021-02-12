import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';


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
        <AppBar style={{backgroundColor:"#6200EE"}} position="static">
            <Toolbar>
                <Typography  variant="h6" className={classes.title}>
                    News
                </Typography>
                <AcUnitRoundedIcon/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;