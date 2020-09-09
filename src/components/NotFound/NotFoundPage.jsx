import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Woof from './woof.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height: '80vh',
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
    },
    error: {
        width: '50%',
        maxWidth: '240px'
    },
    title: {
        fontSize: '1.8em'
    },
    subtitle: {
        fontSize: '1em',
        lineHeight: '1em'
    }
}));

const NotFound = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <div>
                <img src={Woof} alt="The dog ate the page" className={classes.error} />
                <p className={classes.title}>Oh, snap!</p>
                <p className={classes.subtitle}>The page was never here, ask the dog.</p>
                <br />
                <Button color="primary" variant="contained" href="./">Go home</Button>
            </div>
        </Container>
    )
}

export default NotFound;