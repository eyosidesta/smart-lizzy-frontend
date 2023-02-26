import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NAV_COLOR, WHITE_COLOR } from '../utils/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100%',
        backgroundColor: `${NAV_COLOR}`,
        padding: '2%',
        color: `${WHITE_COLOR}`
    }
}))

const NavBar = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className={classes.root}>
            {/* <Grid item xs={3} sm={3} md container> */}
            <Grid container direction="row" justifyContent='space-between'>
                <Grid item xs={3}>
                    <Typography variant="h5" gutterBottom>
                        Taco Tuesday
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Grid item container direction='row' justifyContent='flex-end'>
                        <Grid item xs>
                            <span className="material-icons md-18">minimize
                            </span>
                        </Grid>
                        <Grid item xs>
                            <span className="material-icons md-15">
                                open_in_full
                            </span>
                        </Grid>
                        <Grid item xs>
                            <span className="material-icons md-15">
                                close
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
                {/* </Grid> */}
            </Grid>
        </Grid>
    )
}

export default NavBar;