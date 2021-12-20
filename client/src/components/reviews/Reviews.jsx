// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addReview, getReviews } from "../../redux/features/reviews";
// import Button from "@material-ui/core/Button";
// import {
//   Box,
//   Container,
//   makeStyles,
//   Paper,
//   TextField,
//   Toolbar,
// } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import LoadingRentCar from '../cars/CarById/LoadingRentCar'
//
//
//
//
//
//
//
// const useStyles = makeStyles({
//   boxImg:{
//     backgroundImage:
//         "URL(https://i.trse.ru/2020/10/tmuR.jpg)",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     background: "fixed",
//     paddingBottom: 15,
//   },
//   title: {
//     color: "#33325E",
//     margin: "50px 0px 30px",
//   },
//   titles:{
//     marginTop:100,
//     borderRadius:10
//   },
//   subTitle: {
//     color: "#525F82",
//     fontSize: "20px",
//
//     textAlign:'center',
//     marginTop:70
//
//   },
//   subbTitle: {
//     marginTop: "30px",
//     color: "#525F82",
//     fontSize: "30px",
//     textAlign:'center'
//   },
//   blockReviews: {
//     margin: "50px 300px 0",
//     background: "#F6F4F5"
//   },
//   reviews: {
//     height: "150px",
//   },
//   formBtn: {
//     marginLeft: "20px",
//   },
//   todoText: {
//     margin: "40px",
//     background: "white",
//     padding: "20px",
//     borderBottom: "1px solid black",
//     display:"flex",
//     justifyContent:"space-between",
//
//   },
//   container: {
//     background: "#F6F4F5",
//     marginTop: 100,
//     paddingBottom:20,
//     borderRadius:10
//   },
//   logo: {
//     width: 25,
//     marginRight: 10,
//   },
//   text:{
//     flex:1
//   },
//   inp:{
//     width:500,
//     marginRight:5
//   },
//   btn_delete:{
//     height:40
//   },
//   formInp:{
//     width:700,
//     margin:"auto"
//   },
//   errText: {
//     margin: "20px 0px 20px 200px",
//     paddingLeft: "20px",
//     display: "flex",
//     alignItems: "center",
//     borderRadius: "3px",
//     border: "3px solid red",
//     width: "150px",
//     height: "30px",
//     color: "red"
//   }
// });
//
// function Reviews() {
//   const classes = useStyles();
//
//   const dispatch = useDispatch();
//   const [text, setText] = useState("");
//
//   const handleChangeText = (e) => {
//       setText(e.target.value);
//   };
//
//
//   // const addRecall = (e) => {
//   //   setText('')
//
//   const addRecall = () => {
//
//
//     dispatch(addReview( text ))
//   };
//
//   useEffect(() => {
//     dispatch(getReviews());
//   }, [dispatch]);
//   const recall = useSelector((state) => state.reviews.recall);
//   const token = useSelector(state => state.users.token)
//   const loading = useSelector(state => state.reviews.loading)
//   const error = useSelector(state => state.reviews.error)
//   return (
//     <Box className={classes.boxImg}>
//       <Toolbar/>
//
//       <Container className={classes.container}>
//         {loading ? <LoadingRentCar /> : ''}
//         <Box className={classes.titles}>
//           <Typography className={classes.subTitle} gutterBottom component="p" >
//             Рез валахь цхьаъ яз е, вацахь охь г1о!!!
//
//           </Typography>
//         </Box>
//         <Container>
//           <Box>
//                <Paper >
//
//                     {recall?.map((item) => {
//                       return (
//                     <Typography variant="subtitle1" component="p" className={classes.todoText}
//                     >
//                       <b>{item.userId?.name}</b>: <span className={classes.text}>{item.text}</span>
//                     </Typography>
//                       )
//                     })}
//                   </Paper>
//           </Box>
//
//           {token ? <Box className={classes.formInp}>
//             {error ? <Typography>{error}</Typography> : ''}
//             <TextField id="standard-secondary" label="Оставить комментарий" variant="outlined"
//                        autoComplete={true}
//                        value={text}
//                        onChange={(e)=> handleChangeText(e)}
//                        className={classes.inp}
//             />
//             <Button  className={classes.formBtn} onClick={addRecall}   variant="contained" size="large" color="primary">
//               Добавить
//             </Button>
//           </Box> : ''}
//
//
//         </Container>
//       </Container>
//     </Box>
//   );
// }
//
// export default Reviews;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReview, getReviews } from '../../redux/features/reviews'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { TextField } from '@material-ui/core'

function Reviews () {
  const dispatch = useDispatch();

  const recall = useSelector((state) => state.reviews.recall);
  const token = useSelector(state => state.users.token);
  const loading = useSelector(state => state.reviews.loading);
  const error = useSelector(state => state.reviews.error);

  const [text, setText] = useState("");

  const addRecall = () => {
    dispatch(addReview( text ));
    setText('');
  };

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <>
      <table className={'table table-striped bg-dark bg-opacity-25'}>
        <thead>
        <tr>
          <th className={'text-light text-center'} colSpan={2}>Отзывы клиентов</th>
        </tr>
        <tr>
          <th className={'text-light text-center'} >Имя клиента</th>
          <th className={'text-light text-center'}>Отзыв клиента</th>
        </tr>
        </thead>
        <tbody>
        {
          recall.map(comment => {
            return(
              <tr>
                <th className={'text-light'}>
                  {comment.userId?.name}
                </th>
                <td className={'text-light'}>
                  {comment.text}
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
      <div className="p-lg-3 d-sm-block">
        {token && <Box>
          {error && <p className={'text-danger fw-bold w-50 text-center'}>{error}</p>}
          <div className={"d-flex align-items-center"}>
            <input
              value={text}
              className="form-control w-50 m-2"
              placeholder="Оставьте отзыв"
              onChange={(e)=> setText(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={addRecall}
              type={'submit'}
            >
              Добавить
            </button>
          </div>
        </Box>}
      </div>
    </>
  )
}

export default Reviews
