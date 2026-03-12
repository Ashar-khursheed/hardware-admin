import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import { Card, CardBody, Row } from "reactstrap";
import request from "../../Utils/AxiosUtils";
import { product } from "../../Utils/AxiosUtils/API";
import ShowProduct from "./ShowProduct";
import POSSkeletonLoader from "../../Elements/POSSkeletonLoader";
import ProductFilterSection from "./ProductFilterSection";
import NoDataFound from "../CommonComponent/NoDataFound";
import Pagination from "../Table/Pagination";
import NoProductImage from '../../../public/assets/svg/no-product.png';
import SettingContext from "@/Helper/SettingContext";
import { useRouter } from "next/navigation";

const AllProducts = ({
  setFieldValue,
  values,
  dispatch,
  setCartData,
  CategoryData,
  getCategoryId,
  setStateProduct,
  setGetCategoryId
}) => {
  const [page, setPage] = useState(1);
  const [productParams, setProductParams] = useState({ search: "", category_ids: [] });
  const { sidebarOpen } = useContext(SettingContext);
  const router = useRouter();

  // 🚀 Fetching Products with Pagination
  const { data, refetch, fetchStatus } = useQuery(
    [product, getCategoryId, page],
    () =>
      request({
        url: product,
        params: {
          category_ids: getCategoryId || productParams.category_ids.join(','),
          search: productParams?.search,
          status: 1,
          paginate: 20,
          page
        }
      }, router),
    {
      refetchOnWindowFocus: false
      // ❌ Removed select: (data) => data.data to keep pagination metadata
    }
  );

  useEffect(() => {
    if (productParams?.category_ids?.length) {
      setGetCategoryId("");
    }
  }, [productParams.category_ids]);

  useEffect(() => {
    refetch();
  }, [productParams, page]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("uc", JSON.stringify(values));
    }
    setCartData(values);
  }, [values]);

  return (
    <Card>
      <CardBody className="theme-form">
        <Formik initialValues={{ parent_id: productParams?.category_ids }}>
          {({ setFieldValue, values }) => (
            <ProductFilterSection
              setFieldValue={setFieldValue}
              values={values}
              CategoryData={CategoryData}
              setProductParams={setProductParams}
              getCategoryId={getCategoryId}
              refetch={refetch}
            />
          )}
        </Formik>

        {fetchStatus === "fetching" ? (
          <POSSkeletonLoader />
        ) : (
          <div className="product-section mt-4">
            <Row
              xxl={4}
              md={3}
              sm={2}
              xs={1}
              className={`g-4 row-cols-md-3 row-cols-sm-2 row-cols-1 ${sidebarOpen ? 'row-cols-xxl-5 row-cols-lg-4' : 'row-cols-xxl-4'}`}
            >
              {data?.data?.data?.length > 0 ? (
                data.data.data.map((item) => (
                  <ShowProduct
                    productData={item}
                    key={item.id}
                    setFieldValue={setFieldValue}
                    values={values}
                    dispatch={dispatch}
                    setStateProduct={setStateProduct}
                  />
                ))
              ) : (
                <NoDataFound customImage={NoProductImage} title={"no_products_found"} />
              )}
            </Row>
          </div>
        )}

        {/* ✅ Pagination (now receives correct props) */}
        {data?.data?.data?.length > 0 && (
          // <Pagination
          //   current_page={data.current_page}
          //   total={data.total}
          //   per_page={data.per_page}
          //   setPage={setPage}
          // />
          <Pagination
            current_page={data?.current_page || 1} // if API returns current_page
            total={data?.total || 0}               // total number of items
            per_page={data?.per_page || 20}        // items per page
            setPage={setPage}
          />


        )}
      </CardBody>
    </Card>
  );
};

export default AllProducts;
