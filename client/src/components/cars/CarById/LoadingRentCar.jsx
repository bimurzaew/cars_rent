import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block",
        margin:"auto",
        padding:10
    },
}));

export default function LoadingRentCar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" className={classes.root} />
            {/*<CircularProgress color="secondary" />*/}
        </div>
    );
}
