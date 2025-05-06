"use client"
import AllAuthorTable from "@/Components/Author/AllAuthorTable";
import { AuthorApi } from "@/Utils/AxiosUtils/API";
import React, { useState } from "react";
import { Col } from "reactstrap";

const Author = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllAuthorTable
        url={AuthorApi}
        moduleName="author"
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        keyInPermission={"author"}
      />
    </Col>
  );
};

export default Author;