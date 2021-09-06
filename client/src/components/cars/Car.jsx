
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop:10
    },
    media: {
        height: 100,
        backgroundSize:200


    },
});

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
            <CardActions>
                <Button size="small" color="primary">
                    Арендовать
                </Button>

            </CardActions>
        </Card>

    );
}

export default Car;