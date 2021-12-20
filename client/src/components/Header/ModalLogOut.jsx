import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import style from './header.module.css'
import { BiLogIn } from '@react-icons/all-files/bi/BiLogIn'
import { logOut } from '../../redux/features/users'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function ModalLogOut() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLodOUt = () => {
        dispatch(logOut());
        history.push('/');
    }

    return (
      <div>
              <BiLogIn
                title={"Выход"}
                className={style.exitPage}
                onClick={()=> setOpen(true)}
              />
          <Dialog
            // fullScreen={fullScreen}
            open={open}
            onClose={()=> setOpen(false)}
            aria-labelledby="responsive-dialog-title"
          >
              <DialogContent>
                  <DialogContentText>
                     Выйти из аккаунта?
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleLodOUt}>
                      Выйти
                  </Button>
                  <Button onClick={()=> setOpen(false)}>
                      Отмена
                  </Button>
              </DialogActions>
          </Dialog>
      </div>
    );
}
