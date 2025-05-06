import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][products_list][tag]`, placeholder: t("enter_title"), title: "tags" },
          { name: `[content][products_list][title]`, placeholder: t("enter_sub_title"), title: "title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productList1Categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][products_list][status]`} title="status" />
    </>
  );
};
export default ProductList1Tab;
