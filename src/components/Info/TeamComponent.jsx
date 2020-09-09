import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Info';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import teamInfo from '../../TeamConfig';

const useStyles = makeStyles((theme) => ({
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
}));

function TeamInfo() {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center">
      {teamInfo.map((user) => (
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <List component={ Card } variant="outlined" className={classes.card}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.profileImage} />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="caption">{user.info}</Typography>
              </ListItemText>
            </ListItem>
            <Typography className={classes.links}>
              {user.linkOne ? <Button href={user.linkOne} className={classes.linkButton} size="small" color="primary" variant="text">{user.linkOneTitle}</Button> : null}
              {user.linkTwo ? <Button href={user.linkTwo} className={classes.linkButton} size="small" color="primary" variant="text">{user.linkTwoTitle}</Button> : null}
              {user.linkThree ? <Button href={user.linkThree} className={classes.linkButton} size="small" color="primary" variant="text">{user.linkThreeTitle}</Button> : null}
              {user.linkFour ? <Button href={user.linkFour} className={classes.linkButton} size="small" color="primary" variant="text">{user.linkFourTitle}</Button> : null}
            </Typography>
          </List>
        </Grid>
        ))}
        <Link />
      </Grid>
    </>
  );
}

export default TeamInfo;