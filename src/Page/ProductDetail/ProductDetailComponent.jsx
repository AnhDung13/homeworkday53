import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../config/API";

export default function ProductDetailComponent() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const res = await axios(api, {
      params: {
        id,
      },
    });
    console.log(res);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return <div>ProductDetailComponent</div>;
}
