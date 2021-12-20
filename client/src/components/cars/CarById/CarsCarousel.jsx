import {Carousel} from "react-bootstrap";
import style from "./car.module.css"

function CarsCarousel({img1, img2, img3, name}) {
  return (
      <Carousel
          className={style.carousel_block}
      >
        <Carousel.Item
            className={style.block_imgCar}
        >
          <img
              className={style.imgCar}
              src={img1}
              alt="First slide"
          />
          <Carousel.Caption>
            <h3>{name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className={style.block_imgCar}
        >
          <img
            className={style.imgCar}
              src={img2}
              alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          className={style.block_imgCar}
        >
          <img
            className={style.imgCar}
              src={img3}
              alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{name}</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )

}


export default CarsCarousel;





















