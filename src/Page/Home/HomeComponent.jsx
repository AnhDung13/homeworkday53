import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import ProductsCards from "../../Components/Products/ProductsCards";
import axios from "axios";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import { api } from "../../config/API";

export default function HomeComponent() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { Title } = Typography;

  const getProduct = async (page) => {
    setIsLoading(true);
    const res = await axios.get(api, {
      params: {
        page,
        limit: 20,
      },
    });
    setProducts(res.data.data.listProduct);
    setTotalPage(res.data.data.totalPage);
    setIsLoading(false);
  };
  useEffect(() => {
    getProduct(currentPage);
  }, [currentPage]);

  return (
    <>
      <Title
        level={1}
        style={{ margin: "0.5em 0", textAlign: "center", fontWeight: "bold" }}
      >
        PRODUCTS
      </Title>
      <div className="container mx-auto">
        <div className="row">
          <ProductsCards products={products} isLoading={isLoading} />
        </div>
        <PaginationComponent
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
