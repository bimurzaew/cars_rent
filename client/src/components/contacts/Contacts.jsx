import React from 'react';
import {Container} from "react-bootstrap";
import {Box, makeStyles, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    box_img:{
        backgroundImage:
            "URL(https://i.trse.ru/2020/10/tmuR.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        background: "fixed",
        paddingBottom: 15,
    },
    root:{
        marginTop:120,
        paddingBottom:20
    },
    title: {
        color: "#33325E",
        // margin: "50px 0px 30px"
    },
    subTitle: {
        color: "#525F82",
        fontSize: "20px",
        width: "200px"
    },
    subTittle: {
        color: "#525F82",
        fontSize: "20px",
        width: "200px"
    },
    blockAdvertising: {
        marginTop: "100px",
        background: "#F6F4F5",
        padding:15,
        borderRadius:5
    },
    AdvertisingText: {
        marginTop: "15px",
        color: "#9B3C51",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "45px",
        width: "150px"
    },
    imgHeight: {
        height: "250px"
    },
    footerBox: {
        background: "#F6F4F5",
    },
    requisites: {
        marginTop: "100px",
    }
})

const Contacts = () => {

    const  classes = useStyles()

    return (
        <Box className={classes.box_img}>
            <Toolbar/>
            <Container className={classes.root}>
                <Box >
                    <Typography className={classes.title} gutterBottom variant="h5">
                        Контактная информация
                    </Typography>
                    <Typography className={classes.subTitle} gutterBottom component="p">
                        Мы работаем ежедневно с 10:00 до 21:00 уже более 11 лет. У нас автомобили арендуют звезды эстрады, кино.
                    </Typography>
                    <Grid container spacing={6}>
                        <Grid item={4}>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                <b>Основные пункты выдачи:</b>
                            </Typography>
                            <Typography className={classes.subTitle} gutterBottom component="p">
                                г. Грозный,   Трошева 7, офис 16 (3 этаж), ТЦ «Медина»
                            </Typography>
                        </Grid>
                        <Grid item={4}>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                <b>+7 (995) 826 39 01</b>
                            </Typography>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                <b>+7 (989) 266-66-64</b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.blockAdvertising}>
                    <Typography className={classes.title} gutterBottom variant="h4">
                        Пункты выдачи автомобилей
                    </Typography>
                    <Grid container spacing={7}>
                        <Grid item={6}>
                            <Typography variant="h6">Офис компании «Трошева 7»</Typography>
                            <Typography className={classes.AdvertisingText} component="div">
                                Урус-Мартан
                                Грозный
                                Ачхой-Мартан
                                Дукх Вахи беш
                                Салмани керт
                                Медина кет1
                                Роьшни чохь
                            </Typography>
                        </Grid>
                        <Grid item={6}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.3952221025797!2d45.6900036154872!3d43.326918179133834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d161eaa51e15%3A0xcb7a1a0b45c1b6c8!2z0YPQuy4g0JMg0J0g0KLRgNC-0YjQtdCy0LAsIDI4LzcsINCT0YDQvtC30L3Ri9C5LCDQp9C10YfQtdC90YHQutCw0Y8g0KDQtdGB0L8uLCAzNjQwNjg!5e0!3m2!1sru!2sru!4v1631520794259!5m2!1sru!2sru"
                                width="800" height="600"  allowFullScreen="" loading="lazy"/>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.requisites}>
                    <Typography variant="h4">Реквизиты</Typography>
                    <Grid container spacing={10} >
                        <Grid item={6}>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                <b>ООО «Аьрг баьлш»</b>


                            </Typography>
                            <Typography className={classes.subTittle} gutterBottom component="p">
                                Юридический адрес: 109316, г. Грозный, проспект Путина, д. 32 к. 8
                                Почтовый адрес: 109316, г. Грозный, проспект Бульвара, д. 32 к. 8
                                ИНН/КПП: 7723788393/772301001
                                ОГРН: 1117746112318
                            </Typography>
                        </Grid>
                        <Grid item={6}>
                            <Typography className={classes.title} gutterBottom variant="h5">
                                <b>ООО «Интукод»</b>
                            </Typography>
                            <Typography className={classes.subTittle} gutterBottom variant="h5">
                                Дукх вахиг хатта
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.blockAdvertising}>
                    <Typography className={classes.title} gutterBottom variant="h5">
                        <b>Мы рады обратной связи</b>
                    </Typography>
                    <Typography gutterBottom  variant="h5">
                        Юридический адрес: 109316, г. Грозный,  ТЦ Медина 3 этаж, кабинет 12.
                        Почтовый адрес: intocode@mail.ru
                        ИНН/КПП: 7723733235/772301001
                        ОГРН: 1097746633401
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Contacts;