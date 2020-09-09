import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from './Icon.png'

const useStyles = makeStyles({
  card:{
    margin: 4,
    paddingBottom: 18
  },
  links: {
    marginLeft: 64
  },
  linkButton: {
    paddingLeft: 12,
    paddingRight: 12
  }
});

export const AppVer = () => {
  return (
    <ListItemText primary="Pepper Dashboard" secondary="v1.0.0-release" />
  )
}

function Temp() {
  const classes = useStyles();

  return (
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <List component={ Card } variant="outlined" className={classes.card}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Pepper Dashboard" src={Icon} />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h6">Pepper Dashboard</Typography>
                <Typography variant="caption">Open Source React Dashboard for Wallpapers</Typography>
              </ListItemText>
            </ListItem>
            <Typography className={classes.links}>
            <Button href="https://github.com/undefyned/pepper" className={classes.linkButton} size="small" color="primary" variant="text">GitHub</Button>
            </Typography>
          </List>
        </Grid>
      </Grid>
  );
}

export default Temp;