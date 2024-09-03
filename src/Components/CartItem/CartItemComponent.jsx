import { Button, Card, Flex, Image, Layout, Space, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fomartPrice } from "../../ultis/ultis";
import { trashcan } from "../../svg/icon";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../../redux/cartSlice";
import { toast } from "react-toastify";
import CheckoutComponent from "./CheckoutComponent";

export default function CartItemComponent() {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const handleIncrease = (product) => {
    dispatch(increaseAmount(product));
  };
  const handleDecrease = (product) => {
    if (product.amount === 1) {
      toast.warning("Bạn có chắc muốn xóa không? Chắc rồi thì nhấn vào đây", {
        position: "top-center",
        onClick: () => {
          dispatch(removeCart(product));
          toast.success("Xóa thành công !", {
            position: "top-center",
          });
        },
      });
    } else dispatch(decreaseAmount(product));
  };
  const handleRemove = (product) => {
    toast.warning("Bạn có chắc muốn xóa không? Chắc rồi thì nhấn vào đây", {
      position: "top-center",
      onClick: () => {
        dispatch(removeCart(product));
        toast.success("Xóa thành công !", {
          position: "top-center",
        });
      },
    });
  };
  return (
    <>
      {cart.length === 0 ? (
        <>
          <Title level={1} className="text-center">
            Giỏ Hàng chưa có gì cả T~T
          </Title>
          <a href="/">
            <button className="btn btn-warning d-block mx-auto">Go home</button>
          </a>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item._id}>
              <Space size="large">
                <a href={"/product/" + item._id}>
                  <Image src={item.image} preview={false} />
                </a>
                <div>
                  <div>
                    <Space>
                      <span className="text-danger fs-5">{item.brand}</span>
                      <span className="text fs-5">{item.name}</span>
                    </Space>
                    <Title level={2}>${fomartPrice(item.price)}</Title>
                    <Title level={2}>Còn lại {item.quantity}</Title>
                  </div>
                </div>
              </Space>
              <Flex justify="space-between" align="center" className="mt-4">
                <div>
                  <Button onClick={() => handleDecrease(item)}>-</Button>
                  <Button type="text">{item.amount}</Button>
                  <Button onClick={() => handleIncrease(item)}>+</Button>
                </div>
                <Space align="center">
                  <Title style={{ margin: 0 }} level={1}>
                    ${fomartPrice(item.price * item.amount)}
                  </Title>
                  <Button
                    className="px-3 py-4"
                    danger
                    onClick={() => handleRemove(item)}
                  >
                    {trashcan}
                  </Button>
                </Space>
              </Flex>
            </Card>
          ))}
          <CheckoutComponent cart={cart} />
        </>
      )}
    </>
  );
}
