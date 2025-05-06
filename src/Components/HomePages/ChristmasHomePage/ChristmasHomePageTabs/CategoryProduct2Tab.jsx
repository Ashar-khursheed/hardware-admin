import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoryProduct2Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][category_product_2][title]`, placeholder: t("enter_title"), title: "title" }]} />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categoryProduct2Categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product_2][status]`} title="status" />
    </>
  );
};
export default CategoryProduct2Tab;
