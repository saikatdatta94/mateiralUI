import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/ShareRounded';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme)=>({
      root: {
        
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      purpleColor:{
          color: "#6200EE"
      }
    
}))






const CofeeCard = (props) =>{

    const classes = useStyles();
    const {title,subtitle,price,description,avatarUrl,imageUrl} = props;

    let modDesc = description.toString();
        if(modDesc.length>70){
            modDesc = modDesc.substring(0,65).concat("...");
        }
    

    return(
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar src={avatarUrl} className={classes.avatar}/>
                 }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon style={{color:"#6200EE"}} />
                    </IconButton>
                }
                title={title}
                subheader={price}
             />
             <CardMedia 
                style={{height: "150px"}}
                image={imageUrl}
                title="Paella dish"
             />
            <CardContent >
                <Typography variant="body2" component="p">
                   {modDesc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button style={{fontWeight:"bold"}} className={classes.purpleColor} size="small">Buy Now</Button>
                <Button style={{fontWeight:"bold"}} className={classes.purpleColor} color="primary" size="small">Offer</Button>
            </CardActions>
        </Card>
    );
}

export default CofeeCard;