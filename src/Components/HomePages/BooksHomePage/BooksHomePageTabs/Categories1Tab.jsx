import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const Categories1Tab = ({ values, setFieldValue, categoryData }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name="categories1" title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_1][status]`} title="status" />
    </>
  );
};
export default Categories1Tab;
