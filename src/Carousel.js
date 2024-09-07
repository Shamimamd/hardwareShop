import Carousel from "react-bootstrap/Carousel";
import int1 from "./Images/int1.jpg";
import int2 from "./Images/int2.jpg";
import int3 from "./Images/int3.jpg";
function DarkVariantExample() {
  return (
    <div className="container mt-5">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className=""
            src={int1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className="d-block"
            src={int2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%" }}
            className="d-block"
            src={int3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
