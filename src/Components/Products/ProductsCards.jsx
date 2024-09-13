import { Button, Card, Col, Flex, Image, Row, Typography } from "antd";
import React from "react";
import { cart } from "../../svg/icon";
import { fomartPrice } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
export default function ProductsCards() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
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
        <div className="col-3 mb-4 position-relative" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Card style={{ textAlign: "center", height: "100%" }}>
              <Image src={product.image} preview={false}></Image>
              <Title level={4} className="fw-bold my-3">
                {product.name}
              </Title>

              <Title level={3} className="fw-bold text-start">
                ${fomartPrice(product.price)}
              </Title>
            </Card>
          </Link>
          <button
            className="btn position-absolute"
            style={{
              bottom: "20px",
              right: "20px",
            }}
            onClick={() => addToCart(product)}
          >
            {cart}
          </button>
        </div>
      ))}
    </>
  );
}
