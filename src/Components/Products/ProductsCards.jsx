import { Button, Card, Col, Flex, Image, Row, Typography } from "antd";
import React from "react";
import { cart } from "../../svg/icon";
import { fomartPrice } from "../../ultis/ultis";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function ProductsCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((state) => state.products);

  const addToCart = (product) => {
    const tmp = { ...product };
    tmp.amount = 1;
    toast.success(`Đã thêm ${tmp.name} vào giỏ hàng`, {
      position: "top-center",
    });
    dispatch(addCart(tmp));
  };
  const { Title } = Typography;
  return (
    <>
      {products.map((product) => (
        <div className="col-3 mb-4" key={product._id}>
          <Card
            style={{
              textAlign: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <a>
              <Image
                src={product.image}
                preview={false}
                onClick={() => {
                  navigate(`/product/${product._id}`);
                }}
              ></Image>
            </a>
            <Title
              level={4}
              style={{ fontWeight: "bold", margin: "20px 0 40px" }}
            >
              {product.name}
            </Title>
            <Flex
              justify="space-around"
              align="center"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              }}
            >
              <Title level={3} style={{ fontWeight: "bold" }}>
                ${fomartPrice(product.price)}
              </Title>
              <button className="btn" onClick={() => addToCart(product)}>
                {cart}
              </button>
            </Flex>
          </Card>
        </div>
      ))}
    </>
  );
}
