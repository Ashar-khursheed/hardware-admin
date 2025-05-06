import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";

const MainBannerTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][main_banner][main_title]`, placeholder: t("enter_main_title"), title: "main_title" },
          { name: `[content][main_banner][title]`, placeholder: t("enter_title"), title: "title" },
          { name: `[content][main_banner][sub_title]`, placeholder: t("enter_sub_title"), title: "sub_title" },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="mainBannerImage" title="image" id="mainBannerImage" showImage={values["mainBannerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("375x586px")} />
      <CheckBoxField name={`[content][main_banner][status]`} title="status" />
    </>
  );
};

export default MainBannerTab;
