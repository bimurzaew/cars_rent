import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp() {
    const { enqueueSnackbar } = useSnackbar();


    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Заявка отправлена!', { variant });
    };

    return (
        <React.Fragment>
            <Button
                onClick={handleClickVariant('success')}

            >
                Отправить
            </Button>
        </React.Fragment>
    );
}

export default function ClaimSent() {
    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp />
        </SnackbarProvider>
    );
}
