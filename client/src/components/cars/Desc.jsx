import React from 'react';
import { Button, makeStyles, Paper, Toolbar } from '@material-ui/core'

const useStyles = makeStyles({
  block_title:{
    color:"#9B3C51"
  },
  block_list:{
    color:"#256072"
  },
  info_block:{
    margin: "0 auto 0px",
    width:950,
    backgroundColor:"rgba(255,255,255,0.8)",
    padding:15,
  },
  pick_up:{
    display:"block",
    margin:"auto"
  }
})

function Desc(props) {
  const classes = useStyles()
  return (
    <>
      <Toolbar/>
      <Paper className={classes.info_block}>
        <p className={classes.block_title}>
          Остался без машины , есть срочные дела или на работу опаздываешь?
        </p>
        <p className={classes.block_title}>
          Наши марки абсолютно новые и не подведут вас в самый не подходящий
          момент.
        </p>
        <p className={classes.block_title}>
          А если так случится, что по нашей вине и вы опоздаете , то мы за
          предоставленные неудобства мы отдадим автомобиль вам
        </p>
        <p className={classes.block_title}>
          У нас быстрое оформление, и действует скидка 10% если берешь авто
          больше сутки
        </p>
        <p className={classes.block_list}>
          Мы поможем вам по подобрать автомобиль по обстоятельству:
          <ul>
            <li>Авто для поездки с семьей</li>
            <li>Авто средних классов, цена+качество</li>
            <li>
              А также для более важных встреч, у нас представительские{" "}
              <b>VIP</b> марки{" "}
            </li>
          </ul>
        </p>
        <div>
          <Button
            className={classes.pick_up}
            variant="contained"
            color="secondary"
          >
            <a className="a" href="#cars">
              Подобрать авто
            </a>
          </Button>
        </div>
      </Paper>
    </>

  );
}

export default Desc;