"use client";
import { AllLanguageApi } from "@/Utils/AxiosUtils/API";
import { useState } from "react";
import { Col } from "reactstrap";
import AllLanguagesTable from "@/Components/Language/AllLanguageTable";
import { useRouter } from "next/navigation";

const AllLanguages = () => {
  const router = useRouter()
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllLanguagesTable url={AllLanguageApi} moduleName="Language" language isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllLanguages;
