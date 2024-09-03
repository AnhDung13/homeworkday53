import React from "react";
import HeaderComponent from "../Header/HeaderComponent";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function UserComponent({ component }) {
  return (
    <Layout style={{ background: "none" }}>
      <HeaderComponent />
      <Content>{component}</Content>
    </Layout>
  );
}
