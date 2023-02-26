import React from 'react';
import {Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import TextAreaContainer from '../components/TextAreaContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <NavBar />
            <TextAreaContainer />
        </Grid>
    )
}

export default Home