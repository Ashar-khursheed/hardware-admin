import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/Data/MediaConfig";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const HomeBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  
  return (
    <>
      <CheckBoxField name={`[content][brand][status]`} title="status" />
      <SimpleInputField nameList={[
        { name: `[content][home_banner][title]`, placeholder: t("enter_title"), title: "title" },
        { name: `[content][home_banner][description]`, placeholder: t("enter_description"), title: "description" }
      ]} />
      <CheckBoxField name={`[content][home_banner][show_button]`} title="show_button" />
      <SimpleInputField nameList={[
        { name: `[content][home_banner][button_text]`, placeholder: t("enter_button_text"), title: "button_text" },
      ]} />
      <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "homeBannerLinkType", multipleNameKey: "homeBannerLink" }} setSearch={setSearch} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="homeBannerImage" title="image" id="homeBannerImage" showImage={values["homeBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1859x550px")} />
    </>
  );
};

export default HomeBannerTab;
