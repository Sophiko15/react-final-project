import React from "react"
import { Pagination } from "@mui/material"

export const Paginate = ({total, page, changePage}) => {
  return (
    <Pagination
      count={total}
      page={Number(page)}
      onChange={(_, value) => {
        changePage("page", value);
      }}
    />
  );
};