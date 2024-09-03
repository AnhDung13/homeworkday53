import { Pagination } from "antd";
import React from "react";

export default function PaginationComponent({ totalPage, setCurrentPage }) {
  const handleChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };
  return (
    <Pagination
      defaultCurrent={1}
      total={totalPage * 20}
      pageSize={20}
      showSizeChanger={false}
      style={{ justifyContent: "center" }}
      onChange={handleChange}
    />
  );
}
