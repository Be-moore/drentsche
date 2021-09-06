import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useCardStyle} from '../../styles/overRides'



export default function CustomCard({title,name,description1,description2,description3, photo}) {
  const classes = useCardStyle();

  return (
    <Card square elevation={3} className={classes.root}>
      <CardActionArea component="div" className={classes.action} >
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          height="300"
          image={photo}
          title={title}
        />
        <CardContent component='div' className={classes.content} >
          <div >
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className={classes.name} gutterBottom variant="subtitle2">
              {name}
            </Typography>
          <Typography className={classes.description} variant="body1" component="p">
            {description1}
          </Typography>
          {description2 && <Typography className={classes.description} variant="body1" component="p">
            {description2}
          </Typography>}
          <Typography className={classes.description} variant="body1" component="p">
            {description3}
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
