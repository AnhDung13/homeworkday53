import { Typography } from "antd";
import React from "react";
import { getTotal } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

export default function CheckoutComponent({ cart }) {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(setCart([]));
    toast.success("Checkout thành công !", {
      position: "top-center",
    });
  };
  return (
    <>
      <Title level={1} className="text-center">
        Total Price: ${getTotal(cart)}
      </Title>
      <div className="container">
        <div className="row">
          <div className="col-3 p-0">
            <a href="/">
              <button className="btn btn-warning w-100 rounded-0">
                Go home
              </button>
            </a>
          </div>
          <div className="col-9 p-0">
            <button
              onClick={handleCheckout}
              className="btn btn-success w-100 rounded-0"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
