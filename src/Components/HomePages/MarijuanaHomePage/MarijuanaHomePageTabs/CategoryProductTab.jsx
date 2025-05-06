import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ categoryData, setSearch, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][category_product][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
      <MultiSelectField values={values} setFieldValue={setFieldValue} name={"productCategories"} title="categories" data={categoryData} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`categoryProductImage`} title="image" id={`categoryProductImage`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`categoryProductImage`]} helpertext={getHelperText("806x670px")} />
      <CheckBoxField name={`[content][category_product][status]`} title="status" />
    </>
  );
};
export default CategoryProductTab;
