import { useTranslation } from "react-i18next";
// import CheckBoxField from "@/Components/InputFields/CheckBoxField";
// import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const ProductList1Tab = ({ values, categoryData,setSearch }) => {
  const { t } = useTranslation("common");
  const buttonText = values["content"]["products_list_1"]["more_button"];
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list_1][tag]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][products_list_1][title]`, placeholder: t("enter_sub_title"), title: "sub_title" },
          { name: `[content][products_list_1][description]`, placeholder: t("enter_description"), title: "description" },
        ]}
      />
      <CheckBoxField name={`[content][products_list_1][more_button]`} title="MoreButton" />
      {buttonText && (
        <>
          <SimpleInputField nameList={[{ name: `[content][products_list_1][button_text]`, placeholder: t("enter_button_text"), title: "button_text" }]} />
          <SearchableSelectInput
            nameList={[
              {
                name: "productList1Categories",
                title: "categories",
                inputprops: {
                  name: "productList1Categories",
                  id: "productList1Categories",
                  options: categoryData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
        </>
      )}
      <CheckBoxField name={`[content][products_list_1][status]`} title="status" />
    </>
  );
};
export default ProductList1Tab;
