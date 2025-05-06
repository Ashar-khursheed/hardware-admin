import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ productData, setSearch}) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][product_list_1][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][product_list_1][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][product_list_1][description]`, placeholder: t("enter_description"), title: "description" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList1Product",
            title: "products",
            inputprops: {
              name: "productList1Product",
              id: "productList1Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][product_list_1][status]`} title="status" />
    </>
  );
};
export default ProductList1Tab;
