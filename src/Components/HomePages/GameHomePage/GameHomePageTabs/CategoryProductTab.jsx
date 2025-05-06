import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ values, setFieldValue, categoryData }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][category_product][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][category_product][description]`, placeholder: t("enter_description"), title: "description" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name="productCategories" title="categories" data={categoryData} />
      <CheckBoxField name={`[content][category_product][status]`} title="status" />
    </>
  );
};
export default CategoryProductTab;
