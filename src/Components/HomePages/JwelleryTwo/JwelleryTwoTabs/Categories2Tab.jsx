import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const Categories2Tab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][categories_2][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][categories_2][description]`, placeholder: t("enter_description"), title: "description" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories2"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_2][status]`} title="status" />
    </>
  );
};
export default Categories2Tab;
