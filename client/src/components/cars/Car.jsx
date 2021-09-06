import {Button, Card, CardActions, CardContent, CardMedia, Fab, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop:10
    },
    media: {
        height: 100,
        backgroundSize:200


    },
    cardBottom: {
        display: "flex",
        justifyContent: "space-between"
    }

});

function NavigationIcon(props) {
    return null;
}

NavigationIcon.propTypes = {sx: PropTypes.shape({mr: PropTypes.number})};

function Car({item}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {item.desc}
                    </Typography>
                    <Typography variant="body2" color="secondary" component="p">
                        {item.price} ₽ / в сутки
                    </Typography>
                </CardContent>
            <CardActions className={classes.cardBottom}>
                <Button size="small" color="primary">
                    Арендовать
                </Button>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Подробнее
                </Fab>
            </CardActions>
        </Card>

    );
}

export default Car;