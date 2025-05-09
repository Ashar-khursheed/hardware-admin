import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoriesTab = ({ values, setFieldValue, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
      <SimpleInputField nameList={[{ name: `[content][categories][title]`, placeholder: t("enter_title"), title: "title" }]} />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"categories"} title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories][status]`} title="status" />
    </div>
  );
};

export default CategoriesTab;
