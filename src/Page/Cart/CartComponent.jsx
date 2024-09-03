import { Typography } from "antd";
import React from "react";
import CartItemComponent from "../../Components/CartItem/CartItemComponent";

export default function CartComponent() {
  const { Title } = Typography;
  return (
    <>
      <Title
        level={1}
        style={{ margin: "1em 0", textAlign: "center", fontWeight: "bold" }}
      >
        SHOPPING CART
      </Title>
      <div className="container mx-auto">
        <div className="p-5">
          <CartItemComponent />
        </div>
      </div>
    </>
  );
}
