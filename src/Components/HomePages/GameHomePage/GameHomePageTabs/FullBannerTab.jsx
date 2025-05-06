import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const FullBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
     <SimpleInputField
        nameList={[
          { name: `[content][parallax_banner][main_title]`, placeholder: t("enter_main_title"), title: "main_title" },
          { name: `[content][parallax_banner][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][parallax_banner][sub_title]`, placeholder: t("enter_sub_title"), title: "sub_title" },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="fullBannerImage" title="image" id="fullBannerImage" showImage={values["fullBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1920x1018px")} />
      <CheckBoxField name={`[content][parallax_banner][status]`} title="status" />
    </>
  );
};

export default FullBannerTab;
