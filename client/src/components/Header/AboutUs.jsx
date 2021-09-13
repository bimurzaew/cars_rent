import React from 'react';
import {Box, CardMedia, Container, Link, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import  client from "../assets/clin.svg"
import  moneyBox from "../assets/piggy_bank.svg"
import  watch from "../assets/clock.svg"
import  car from "../assets/100+.svg"


const useStyles = makeStyles({
title: {
color: "#33325E",
    margin: "50px 0px 30px"
},
    subTitle: {
        color: "#525F82",
        fontSize: "20px"
    },
    blockAdvertising: {
        marginTop: "100px",
        marginBottom: "50px",
        background: "#F6F4F5"
    },
    AdvertisingText: {
        marginTop: "15px",
        color: "#9B3C51",
        fontWeight: "500",
        fontSize: "18px"

},
    imgHeight: {
     height: "250px"
    },
    footerBox: {
        background: "#F6F4F5",
    }
})

const AboutUs = () => {
    const  classes = useStyles()

    return (
        <Container>
           <Box>
               <Typography className={classes.title} gutterBottom variant="h5">
                   О компании
               </Typography>
               <Typography className={classes.subTitle} gutterBottom component="p">
                   Компания «ПростоПрокат» более 10 лет предоставляет качественные услуги автопроката в Москве.
                   Обширный автопарк более 100 машин способен удовлетворить запросы самых взыскательных заказчиков.
                   У нас разработаны и успешно действуют программы поощрения постоянных клиентов, скидки в зависимости от количества дней аренды машины,
                   а также предлагаются аксессуары типа GPS за символическую плату. В своей работе компания «ПростоПрокат» руководствуется следующими принципами:
               </Typography>
           </Box>

            <Box className={classes.blockAdvertising}>
             <Grid container spacing={10}>
                 <Grid item={3}>
                     <Grid item>
                         <img src={client}/>
                     </Grid>
                    <Grid item>
                        <Typography className={classes.AdvertisingText} component="div">
                            Клиенты — наш
                            потенциал
                        </Typography>
                    </Grid>
                 </Grid>
                 <Grid item={3}>
                     <Grid item>
                         <img src={moneyBox}/>
                     </Grid>
                     <Grid item>
                         <Typography className={classes.AdvertisingText} component="p">
                            Низкие цены от 1330₽
                         </Typography>
                     </Grid>
                 </Grid>
                 <Grid item={3}>
                     <Grid item>
                         <img src={watch}/>
                     </Grid>
                     <Grid item>
                         <Typography className={classes.AdvertisingText} component="p">
                             Мы работаем круглосуточно
                         </Typography>
                     </Grid>
                 </Grid>
                 <Grid item={3}>
                     <Grid item>
                         <img src={car}/>
                     </Grid>
                     <Grid item>
                         <Typography className={classes.AdvertisingText} component="p">
                            Автопарк вашей  мечты
                         </Typography>
                     </Grid>
                 </Grid>
             </Grid>
            </Box>
            <Grid container spacing={6}>
                <Grid item={4}>
                  <img  className={classes.imgHeight} src="https://prostoprokat.ru/images/about/about-1.jpg"/>
                    <Typography className={classes.AdvertisingText} component="p">
                        Организатор
                        Первой конференции
                    </Typography>
                </Grid>
                <Grid item={4}>
                    <img className={classes.imgHeight} src="https://prostoprokat.ru/images/about/about-2.jpg"/>
                    <Typography className={classes.AdvertisingText} component="p">
                        Учредители Ассоциации
                        автопрокатов
                    </Typography>
                </Grid>
                <Grid item={4}>
                    <img className={classes.imgHeight} src="https://prostoprokat.ru/images/about/about-3.jpeg"/>
                    <Typography className={classes.AdvertisingText} component="p">
                        Соответствуем стандартам
                        менеджмента ISO9001
                    </Typography>
                </Grid>
            </Grid>
            <Box>
                <Typography className={classes.title} gutterBottom variant="h4">
                    Мы работаем круглосуточно
                </Typography>
                <Typography className={classes.subTitle} gutterBottom component="p">
                    Что может быть проще, чем получить за 10 минут авто по приемлемой цене автопроката?
                    В этот небольшой промежуток времени включено офисное оформление машины, оплата,
                    передача ключей и арендованного авто. Автомобиль выдается чистым, заправленным,
                    со страховкой по КАСКО и ОСАГО. руководствуется следующими принципами:
                </Typography>
            </Box>

            <Box>
                <Typography className={classes.title} gutterBottom variant="h4">
                    Автопарк Вашей мечты
                </Typography>
                <Typography className={classes.subTitle} gutterBottom component="p">
                    Не только VIP-авто, но и любой сегмент на выбор:
                    более 100 моделей автомобилей 18 популярных марок, некоторые из них –
                    легенды мирового автопрома. Таков наш автопарк, и он ежегодно пополняется автомобилями. Мы не гонимся за массовостью, отбираем только самое лучшее, исключительно автомобили с историей успеха и
                    признания среди пользователей. Для нас круглосуточный автопрокат в Москве — не просто бизнес, это призвание.
                </Typography>
            </Box>

            <Box>
                <Typography className={classes.title} gutterBottom variant="h4">
                    Клиенты – наш потенциал
                </Typography>
                <Typography className={classes.subTitle} gutterBottom component="p">
                    Работа с клиентом – вот еще один аспект работы «ПростоПроката». Мы стараемся сделать так, чтобы клиенты вернулись снова. Вся работа компании построена ради этого. Мы поддерживаем и развиваем программы лояльности, бонусов для постоянных клиентов, стараемся отточить работу офиса, держим обратную связь и обрабатываем рекламации. Любое Ваше мнение будет учтено!

                    Многолетний опыт на рынке автопроката позволяет утверждать, что мы хорошо знаем свое дело. Работа с профессионалами всегда приносит радость.
                    Никаких лишних хлопот, все ясно, четко, проблемы решаются «влет».
                    Таков стиль работы «ПростоПрокат».
                </Typography>
            </Box>

            <Box>
                <Typography className={classes.title} gutterBottom variant="h4">
                    Автопрокат недорого
                </Typography>
                <Typography className={classes.subTitle} gutterBottom component="p">
                    Мы стараемся, чтобы автопрокат нашей компании был выгоден клиентам. Эконом-класс, средняя категория, бизнес-сегмент, внедорожники, коммерческие автомобили и VIP – цены за автопрокат в Москве порадуют клиентов с разными финансовыми возможностями.

                    Аренда авто от компании «Простопрокат» доступна всем. В этом легко убедиться, посетив сайт и просмотрев цены на услуги. Позитивные отзывы наших клиентов дают нам вдохновение и дальше работать в этой сфере.

                    Приглашаем Вас посетить наш салон по прокату авто либо оставить свою заявку на сайте.
                </Typography>
            </Box>

            <Box className={classes.footerBox}>
                <Typography className={classes.title} gutterBottom variant="h4">
                    Мы рады обратной связи
                </Typography>
                <Typography className={classes.subTitle} gutterBottom component="p">
                    Наша компания всегда выслушает предложения и замечания по работе. Мы настолько зациклены на сервисе,
                    что каждое письмо с этой формы лично читает директор.
                </Typography>
            </Box>

        </Container>
    );
};

export default AboutUs;