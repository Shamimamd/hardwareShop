import React, { useState } from "react";
import Cardsdata from "./components/CardData";
import Headers from "./components/Headers";
import Carousel from "./Carousel";
import Products2 from "./Products2";
// import ImageSlider from "./ImageSlider";

import "./style.css";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/features/cartSlice";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import LatestProducts from "./LatestProducts";

const ProductList = () => {
  const [products, setProducts] = useState(Cardsdata);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  //add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  return (
    <>
      <Carousel></Carousel>
      <Products2></Products2>
      <LatestProducts></LatestProducts>
      {/* <ImageSlider></ImageSlider> */}
      <section className="iteam_section mt-4 container">
        <Headers></Headers>

        <h2 className="px-4 text-center" style={{ fontWeight: 400 }}>
          interior fittings
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {products.map((element, index) => {
            return (
              <Card
                key={index}
                style={{ width: "22rem", border: "none" }}
                className="hove mb-4"
              >
                <Card.Img variant="top" className="cd" src={element.imgdata} />

                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{element.dish}</h4>
                    <span>{element.rating}&nbsp;★</span>
                  </div>

                  <div className="lower_data d-flex justify-content-between ">
                    <h5>{element.address}</h5>
                    <span>₹ {element.price}</span>
                  </div>
                  <div className="extra"></div>

                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={element.arrimg} className="limg" alt="" />
                    <Button
                      style={{
                        width: "150px",
                        background: "#ff3054db",
                        border: "none",
                      }}
                      variant="outline-light"
                      className="mt-2 mb-2"
                      onClick={() => send(element)}
                    >
                      Add TO Cart
                    </Button>
                    <img src={element.delimg} className="laimg" alt="" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductList;
