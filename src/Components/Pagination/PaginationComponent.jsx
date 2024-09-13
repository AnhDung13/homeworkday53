import { Pagination } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PaginationComponent({ currentPage }) {
  const { totalPage } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const handleChange = (page) => {
    navigate(`/products/page/${page}`);
  };
  return (
    <Pagination
      defaultCurrent={1}
      current={currentPage}
      total={totalPage * 20}
      pageSize={20}
      showSizeChanger={false}
      style={{ justifyContent: "center" }}
      onChange={handleChange}
    />
  );
}
