import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(1),
        },
        padding:10
    },
}));

export default function LoadingModal() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
            {/*<CircularProgress color="secondary" />*/}
        </div>
    );
}
