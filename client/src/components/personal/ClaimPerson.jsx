import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import ClaimSent from "./ClaimSent";

const useStyles = makeStyles((theme) => ({
    modal:{
        width:600,
        margin:"auto"
    },
    inp:{
        width:"90%"
    }
}))

export default function ClaimPerson() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button variant="outlined" color="primary" onClick={handleClickOpen} >
                Оставить заявку
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Пожалуйста заполните поля"}</DialogTitle>
                <DialogContent                 className={classes.modal}
                >
                    <p>
                        <TextField id="standard-basic" label="Имя" className={classes.inp} />
                    </p>
                    <p>
                        <TextField id="standard-basic" label="Фамилия" className={classes.inp}/>
                    </p>
                    <p>
                        <TextField id="standard-basic" label="Почта" className={classes.inp} />
                    </p>
                    <p>
                        <TextField id="standard-basic" label="Контакт" className={classes.inp}/>
                    </p>
                    <p>
                        <TextField id="standard-basic" label="Адрес" className={classes.inp}/>
                    </p>
                    <Button variant="contained">
                       <ClaimSent/>
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
