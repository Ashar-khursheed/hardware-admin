import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import React from "react";
import { useTranslation } from "react-i18next";

const SingleProductTab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][single_product][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "singleProductList",
            title: "products",
            inputprops: {
              name: "singleProductList",
              id: "singleProductList",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField
        name={`[content][single_product][status]`}
        title="status"
      />
    </>
  );
};

export default SingleProductTab;
