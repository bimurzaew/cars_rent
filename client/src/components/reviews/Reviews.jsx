import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview, getReviews } from "../../redux/features/reviews";
import Button from "@material-ui/core/Button";
import {
  Box,
  Container,
  makeStyles,
  Paper,
  TextField,
  Toolbar,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Loading from "../cars/Loading";



const useStyles = makeStyles({
  boxImg:{
    backgroundImage:
        "URL(https://i.trse.ru/2020/10/tmuR.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    background: "fixed",
    paddingBottom: 15,
  },
  title: {
    color: "#33325E",
    margin: "50px 0px 30px",
  },
  titles:{
    marginTop:100,
    borderRadius:10
  },
  subTitle: {
    color: "#525F82",
    fontSize: "20px",

    textAlign:'center',
    marginTop:70

  },
  subbTitle: {
    marginTop: "30px",
    color: "#525F82",
    fontSize: "30px",
    textAlign:'center'
  },
  blockReviews: {
    margin: "50px 300px 0",
    background: "#F6F4F5"
  },
  reviews: {
    height: "150px",
  },
  formBtn: {
    marginLeft: "20px",
  },
  todoText: {
    margin: "40px",
    background: "white",
    padding: "20px",
    borderBottom: "1px solid black",
    display:"flex",
    justifyContent:"space-between",

  },
  container: {
    background: "#F6F4F5",
    marginTop: 100,
    paddingBottom:20,
    borderRadius:10
  },
  logo: {
    width: 25,
    marginRight: 10,
  },
  text:{
    flex:1
  },
  inp:{
    width:500,
    marginRight:5
  },
  btn_delete:{
    height:40
  },
  formInp:{
    width:700,
    margin:"auto"
  }
});

function Reviews() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
      setText(e.target.value);
  };

  const addRecall = (e) => {
    dispatch(addReview( text ))
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
  const recall = useSelector((state) => state.reviews.recall);
  const loading = useSelector(state => state.reviews.loading)
  const error = useSelector(state => state.reviews.error)
  return (
    <Box className={classes.boxImg}>
      <Toolbar/>

      <Container className={classes.container}>
        {loading ? <Loading /> : ''}
        <Box className={classes.titles}>
          <Typography className={classes.subTitle} gutterBottom component="p" >
            Рез валахь цхьаъ яз е, вацахь охь г1о!!!

          </Typography>
        </Box>
        <Container>
          <Box>


                  <Paper >
                    {recall?.map((item) => {
                      return (
                    <Typography variant="subtitle1" component="p" className={classes.todoText}
                    >
                      <b>{item.userId?.name}</b>: <span className={classes.text}>{item.text}</span>
                      <Button variant="contained" color="secondary" className={classes.btn_delete}>
                        Удалить
                      </Button>
                    </Typography>
                      )
                    })}
                  </Paper>

          </Box>
            <Box className={classes.formInp}>
              {error ? <Typography>{error}</Typography> : ''}
                <TextField id="outlined-basic" label="Оставить комментарий" variant="outlined"
                           autoComplete={false}
                           value={text}
                           onChange={(e)=> handleChangeText(e)}
                           className={classes.inp}
                />
                <Button  className={classes.formBtn} onClick={addRecall}   variant="contained" size="large" color="primary">
                  Добавить
                </Button>
            </Box>
        </Container>
      </Container>
    </Box>
  );
}

export default Reviews;
