import Loader from "@/Components/CommonComponent/Loader";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";

const BrandTab = ({ values, setFieldValue, brandData, brandLoader }) => {

  if (brandLoader) return <Loader />;
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name="brandItems" title="brand" data={brandData} />
      <CheckBoxField name={`[content][brand][status]`} title="status" />
    </>
  );
};
export default BrandTab;
