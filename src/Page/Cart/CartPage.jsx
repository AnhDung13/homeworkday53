import React from "react";
import UserComponent from "../../Components/UserComponent/UserComponent";
import CartComponent from "./CartComponent";

export default function CartPage() {
  return <UserComponent component={<CartComponent />} />;
}
