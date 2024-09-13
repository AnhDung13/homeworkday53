import { Typography } from "antd";
import React, { useEffect } from "react";
import ProductsCards from "../../Components/Products/ProductsCards";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ReactLoading from "react-loading";
export default function HomeComponent() {
  const { Title } = Typography;
  const { page } = useParams();
  const { isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page]);
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
          {isLoading ? (
            <ReactLoading
              type="spin"
              color="#000"
              className="mx-auto d-flex align-items-center"
            />
          ) : (
            <ProductsCards />
          )}
        </div>
        <PaginationComponent currentPage={page} />
      </div>
    </>
  );
}
