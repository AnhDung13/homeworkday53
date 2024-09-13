import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../constance/API";
import { Button, Card, Image, Space, Typography } from "antd";
import { fomartPrice } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
export default function ProductDetailComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { Title, Paragraph } = Typography;
  const dispatch = useDispatch();
  const addToCart = (product) => {
    const tmp = { ...product };
    tmp.amount = 1;
    toast.success(`Đã thêm ${tmp.name} vào giỏ hàng`, {
      position: "top-center",
    });
    dispatch(addCart(tmp));
  };
  const getProduct = async () => {
    const res = await axios(api + `/${id}`);
    setProduct(res.data.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {product === null ? (
        <ReactLoading
          type="spin"
          color="#000"
          className="mx-auto d-flex align-items-center"
          height={"100vh"}
        />
      ) : (
        <div className="container mx-auto mt-5">
          <Card>
            <Space size="large">
              <a href={"/product/" + product._id}>
                <Image src={product.image} preview={false} width={"400px"} />
              </a>
              <div>
                <div>
                  <Title level={2} style={{ color: "darkred" }}>
                    {product.brand}
                  </Title>
                  <Title level={2}>{product.name}</Title>
                  <Paragraph strong style={{ fontSize: "large" }}>
                    "{product.description}"
                  </Paragraph>
                  <p>category: {product.category}</p>
                  <Link
                    to="/"
                    className="btn text-white"
                    style={{ background: "darkred" }}
                  >
                    Go home
                  </Link>
                  <Title level={1}>$ {fomartPrice(product.price)}</Title>
                  <Button
                    size="large"
                    style={{ background: "darkred", color: "#fff" }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Space>
          </Card>
        </div>
      )}
    </>
  );
}
