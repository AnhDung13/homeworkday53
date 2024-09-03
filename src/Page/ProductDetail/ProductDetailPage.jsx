import React from "react";
import UserComponent from "../../Components/UserComponent/UserComponent";
import ProductDetailComponent from "./ProductDetailComponent";

export default function ProductDetailPage() {
  return <UserComponent component={<ProductDetailComponent />} />;
}
