import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import placeHolderImage from "../../../public/assets/images/placeholder.png";
import CheckBoxField from "../../Components/InputFields/CheckBoxField.js";
import request from "../../Utils/AxiosUtils";
import { AuthorApi, BrandAPI, Category, product, PublicationApi, tag } from "../../Utils/AxiosUtils/API";
import Loader from "../CommonComponent/Loader";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";
import ProductDateRangePicker from "./Widgets/DateRangePicker";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const SetupTab = ({ values, setFieldValue, errors, updateId }) => {
  const { t } = useTranslation("common");
  const [search, setSearch] = useState(false);
  const [customSearch, setCustomSearch] = useState("");
  const [tc, setTc] = useState(null);
  const router = useRouter();

  // Getting Category Data with type products
  const { data: categoryData } = useQuery([Category], () => request({ url: Category, params: { status: 1, type: "product" } }, router), { refetchOnWindowFocus: false, select: (data) => data.data.data });

  // Getting Tags Data with type products
  const { data: tagData } = useQuery([tag], () => request({ url: tag, params: { status: 1, type: "product" } }, router), { refetchOnWindowFocus: false, select: (data) => data.data.data });

  //Getting Brand Data
  const { data: BrandsData } = useQuery([BrandAPI], () => request({ url: BrandAPI, params: { status: 1 } }, router), { refetchOnWindowFocus: false, select: (data) => data.data.data });

  //Getting author Data
  const { data: authorData } = useQuery([AuthorApi], () => request({ url: AuthorApi }, router), {
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data?.map((elem) => {
        return { name: elem.author_name, id: elem.id };
      }),
  });

  //Getting author Data
  const { data: publicationData } = useQuery([PublicationApi], () => request({ url: PublicationApi }, router), {
    refetchOnWindowFocus: false,
    select: (res) =>
      res?.data?.data?.map((elem) => {
        return { name: elem.publisher_name, id: elem.id };
      }),
  });

  // Getting Products Data
  const [arrayState, setArrayState] = useState([]);
  useEffect(() => {
    if (updateId) {
      setArrayState((prev) => Array.from(new Set([...prev, ...values["related_products"], ...values["cross_sell_products"]])));
    }
  }, [updateId]);
  const {
    data: productData,
    isLoading: productLoader,
    refetch,
  } = useQuery(
    [product, arrayState],
    () =>
      request(
        {
          url: product,
          params: {
            status: 1,
            search: customSearch ? customSearch : "",
            paginate: arrayState?.length >= 15 ? arrayState?.length : 15,
            ids: customSearch ? null : arrayState?.join() || null,
            with_union_products: arrayState?.length ? (arrayState?.length >= 15 ? 0 : 1) : 0,
          },
        },
        router
      ),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      select: (res) =>
        res?.data?.data
          .filter((elem) => (updateId ? elem?.id !== Number(updateId) : elem))
          .map((elem) => {
            return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || placeHolderImage, slug: elem?.slug };
          }),
    }
  );

  useEffect(() => {
    productLoader && refetch();
  }, [productLoader]);

  // Added debouncing
  useEffect(() => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setCustomSearch(search), 500));
  }, [search]);

  // Getting users data on searching users
  useEffect(() => {
    !productLoader && refetch();
  }, [customSearch, arrayState, updateId]);

  const customCrossSellProduct = (productData) => {
    return productData?.filter((elem) => elem.stock_status !== "out_of_stock" && elem?.type !== "classified");
  };

  // if (productLoader) return <Loader />;
  return (
    <>
      <ProductDateRangePicker values={values} setFieldValue={setFieldValue} />

      <SimpleInputField nameList={[{ name: "unit", title: "unit", placeholder: t("enter_unit"), helpertext: "*Specify the measurement unit, such as 10 Pieces, 1 KG, 1 Ltr, etc." }]} />

      <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="tags" data={tagData} />

      <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="categories" require="true" data={categoryData} />

      <SearchableSelectInput
        nameList={[
          {
            name: "brand_id",
            title: "brands",
            inputprops: {
              name: "brand_id",
              id: "brand_id",
              options: BrandsData || [],
              close: true,
            },
          },
        ]}
      />
      <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} title="author" name="authors_id" data={authorData} />

      <SearchableSelectInput
        nameList={[
          {
            name: "publication_id",
            title: "publication",
            inputprops: {
              name: "publication_id",
              id: "publication_id",
              options: publicationData || [],
              close: true,
            },
          },
        ]}
      />
      <CheckBoxField name="is_random_related_products" title="random_related_product" helpertext="*Enabling this option allows the backend to randomly select 6 products for display." />
      {!values["is_random_related_products"] && (
        <SearchableSelectInput
          nameList={[
            {
              name: "related_products",
              title: "related_products",
              inputprops: {
                name: "related_products",
                id: "related_products",
                options: productData || [],
                setsearch: setSearch,
                helpertext: "*Choose a maximum of 6 products for effective related products display.",
              },
            },
          ]}
        />
      )}
      {values["product_type"] === "physical" ? (
        <SearchableSelectInput
          nameList={[
            {
              name: "cross_sell_products",
              title: "cross_sell_products",
              inputprops: {
                name: "cross_sell_products",
                id: "cross_sell_products",
                options: customCrossSellProduct(productData)?.map((elem) => {
                  return { id: elem.id, name: elem.name, image: elem?.image || placeHolderImage };
                }),
                setsearch: setSearch,
                helpertext: "*Choose a maximum of 3 products for effective cross-selling display.",
              },
            },
          ]}
        />
      ) : null}
    </>
  );
};

export default SetupTab;
