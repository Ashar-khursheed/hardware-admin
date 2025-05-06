import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";


import { useTranslation } from "react-i18next";

const FooterSubscribe = ({values,setFieldValue}) => {
    
    const { t } = useTranslation( 'common');
  return (
    <>
      <FileUploadField
        name="FooterSubscribeImage"
        title="image"
        id="FooterSubscribeImage"
        showImage={values["FooterSubscribeImage"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("1155x670px")}
      />
      <SimpleInputField
        nameList={[
          {
            name: `[options][footer][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
          {
            name: `[options][footer][sub_title]`,
            placeholder: t("enter_sub_title"),
            title: "enter_sub_title",
          },
        ]}
      />
    </>
  );
};

export default FooterSubscribe;
