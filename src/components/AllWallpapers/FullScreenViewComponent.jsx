import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useHistory, useLocation, withRouter } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import GetWallpaper from '@material-ui/icons/GetAppTwoTone';
import CloseTwo from '@material-ui/icons/CloseTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }
  },
  fullscreenBody: {
      display: 'grid',
      placeItems: 'center',
      width: '100vw',
      height: 'calc(100vh)',
      position: 'fixed',
      left: '0px',
      bottom: '0px',
      margin: '0px',
      zIndex: '99999999999'
  },
  fullscreenImage: {
      width: 'auto',
      height: '100%',
      objectPosition: 'center',
      objectFit: 'cover'
  },
  closeButton: {
      width: '100vw',
      position: 'fixed',
      bottom: '0px',
      margin: '0px',
      textAlign: 'center',
      zIndex: '999999999999'
  }
}));

function FullscreenView() {
  const classes = useStyles();

  let history = useHistory();

  let data = useLocation();

  return (
    <div className={classes.root}>
        <Paper className={classes.fullscreenBody}><img className={classes.fullscreenImage} src={data.state.thumb} alt={data.state.name} /></Paper>
        <div className={classes.closeButton}>
          <Fab onClick={() => history.goBack()} variant="round" size="medium" color="secondary"><CloseTwo /></Fab>&emsp;
          <Fab href={data.state.url} aria-label={`download ${data.state.name}`} variant="round" size="medium" color="primary" download={data.state.name +'.png'}><GetWallpaper /></Fab>
          </div>
    </div>
  );
}

export default withRouter(FullscreenView);