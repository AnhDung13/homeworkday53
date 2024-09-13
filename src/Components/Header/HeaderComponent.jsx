import { Badge, Button, Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { handbag } from "../../svg/icon";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { productCount } from "../../ultis/ultis";
const headerStyle = {
  background: "#252b48",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "fit-content",
  paddingTop: "20px",
  paddingBottom: "20px",
  zIndex: 50,
};
export default function HeaderComponent() {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center">
        <a
          href="/"
          style={{ width: "50px", display: "flex", alignItems: "center" }}
        >
          <img
            src="https://www.svgrepo.com/show/303503/shopify-logo.svg"
            width={"100%"}
            alt=""
          />
        </a>
        <Badge count={productCount(cart)}>
          <Button
            type="link"
            onClick={() => {
              navigate("/cart");
            }}
          >
            {handbag}
          </Button>
        </Badge>
      </Flex>
    </Header>
  );
}
