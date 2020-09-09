import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetAppTwoTone';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ThemeSwitch from '../SwitchTheme/SwitchThemeComponent';
import TeamInfo from './TeamComponent';
import { AppName, AppVersion } from '../../AppConfig';
import { AppVer } from './Info';
import PreviewQuality from '../PreviewQuality/PreviewQualityComponent';
import wallpaperList from '../AllWallpapers/wallpaperList';

const useStyles = makeStyles({
    root: {
        marginTop: '12px',
        marginBottom: '64px'
    },
    divider: {
        marginTop: '12px',
        marginBottom: '12px'
    },
    listAction: {
      right: 0,
      paddingRight: 0,
      marginRight: 0
    },
    installButton: {
        marginTop: 20,
        marginBottom: 20
    }
});

const InfoPage = () => {
    const classes = useStyles();

    return (
        <Container>
            <TeamInfo />
            <Divider className={classes.divider} /> 
            <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
                <ListItem>
                    <ListItemText primary="Dark Theme" />
                    <ListItemSecondaryAction className={classes.listAction}>
                        <ThemeSwitch />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Data Saver" secondary="Low Resolution Previews" />
                    <ListItemSecondaryAction className={classes.listAction}>
                        <PreviewQuality />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.divider} />  
                <ListItem>
                    <ListItemText primary="Wallpaper Count" secondary={Object.keys(wallpaperList).length} />
                </ListItem> 
                <ListItem>
                    <ListItemText primary={AppName} secondary={AppVersion} />
                </ListItem>
                <ListItem>
                    <AppVer />
                </ListItem>
                <ListItem>
                        <Button 
                        variant="contained"
                        color="primary"
                        startIcon={<GetAppIcon />}
                        id="add-button"
                        style={{display: 'none'}}
                        className={classes.installButton}
                        >
                        INSTALL APP
                        </Button>
                </ListItem>
            </List>
        </Container>
    )
}

export default InfoPage;