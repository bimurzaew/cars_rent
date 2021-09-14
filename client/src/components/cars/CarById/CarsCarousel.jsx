import {Carousel} from "react-bootstrap";
import "./carsById-style.css"

function CarsCarousel({img1, img2, img3, name}) {
  return (
      <Carousel
          className={"carousel-block"}
      >
        <Carousel.Item
            className="block_imgCar"
        >
          <img
              className="imgCar"
              src={img1}
              alt="First slide"
          />
          <Carousel.Caption>
            <h3>{name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
            className="block_imgCar"
        >
          <img
              className="imgCar"
              src={img2}
              alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
            className="block_imgCar"
        >
          <img
              className="imgCar"
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





















