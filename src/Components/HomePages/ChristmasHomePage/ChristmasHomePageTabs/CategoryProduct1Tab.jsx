import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const CategoryProduct1Tab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product_1][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][category_product_1][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryProduct1Categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product_1][status]`} title="status" />
    </>
  );
};
export default CategoryProduct1Tab;
