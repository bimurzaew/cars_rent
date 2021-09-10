import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  useSelector } from 'react-redux';
import {Box, Container, Grid, Toolbar} from "@material-ui/core";


function PersonalPage(props) {
  const useStyles = makeStyles({
    root: {
      marginTop:150,

    },
    media: {
      height:360 ,
    },
  });
    const classes = useStyles();
    const user = useSelector(state =>JSON.parse( state.users.candidate))
    const us =  JSON.parse(localStorage.getItem('candidate'))
    return (
     <Container>
       <Toolbar/>

       <Box>
         <Grid container className={classes.root}>
           <Grid item xs={3}>
             <CardMedia
                 className={classes.media}
                 image="https://seeding.com.ua/wp-content/uploads/2017/04/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2.jpg"
                 title="Contemplative Reptile"
             />
           </Grid>
           <Grid item xs={1}/>
           <Grid item xs={3}>
             <Typography gutterBottom variant="h5" component="p">
               <b>Фамилия</b>: {user.lastName}
             </Typography>
             <Typography gutterBottom variant="h5" component="p">
               <b>Имя</b>: {user.name}
             </Typography>
             <Typography gutterBottom variant="h5" component="p">
               <b>Почта</b>:
             </Typography>
             <Typography gutterBottom variant="h5" component="p">
               <b>Контакты</b>:
             </Typography>
           </Grid>
         </Grid>
       </Box>
     </Container>
    );
  }

  export default PersonalPage;

