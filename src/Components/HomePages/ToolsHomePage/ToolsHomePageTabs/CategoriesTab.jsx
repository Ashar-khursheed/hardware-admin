import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoriesTab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][categories][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][categories][description]`, placeholder: t("enter_description"), title: "description", type: "textarea" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories][status]`} title="status" />
    </>
  );
};
export default CategoriesTab;
