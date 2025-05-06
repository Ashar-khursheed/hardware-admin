import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";

const Categories2Tab = ({ values, setFieldValue, categoryData, productData }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name="categories2" title="categories" data={categoryData} />
      <CheckBoxField name={`[content][categories_2][status]`} title="status" />
    </>
  );
};
export default Categories2Tab;
