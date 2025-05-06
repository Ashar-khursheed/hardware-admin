import { mediaConfig } from "@/Data/MediaConfig";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import { FooterUseFulLink, helpCenter } from "../../Data/TabTitleListData";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const FooterTab = ({ values, setFieldValue, errors, categoryData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Row>
        <Col sm="12">
          <SearchableSelectInput
            nameList={[
              {
                name: "[options][footer][footer_style]",
                title: "footer_style",
                inputprops: {
                  name: "[options][footer][footer_style]",
                  id: "[options][footer][footer_style]",
                  options: [
                    { id: "footer_one", name: "FooterLight" },
                    { id: "footer_two", name: "FooterDark" },
                    { id: "footer_three", name: "FooterColor" },
                    { id: "footer_four", name: "FooterImage" },
                  ],
                  defaultOption: "Select Footer Style",
                },
              },
            ]}
          />
          {values["options"]["footer"]?.["footer_style"] === "footer_four" && <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="footerImage" title="FooterBackgroundImage" id="footerImage" showImage={values["footerImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1155x670px")} />}
          {values["options"]["footer"]?.["footer_style"] === "footer_three" && <SimpleInputField nameList={[{ name: "[options][footer][bg_color]", title: "background_color", type: "color" }]} />}
          <SimpleInputField
            nameList={[
              { name: "[options][footer][footer_about]", type: "textarea", title: "footer_content", placeholder: t("enter_footer_content") },
              { name: "[options][footer][about_address]", type: "textarea", title: "address", placeholder: t("enter_address") },
              { name: "[options][footer][about_email]", title: "email", placeholder: t("enter_email") },
            ]}
          />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="footer_categories" title={"footer_categories"} data={categoryData || []} />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} title="useful_link" name="useful_link" data={FooterUseFulLink} helpertext="*Pick Usefull Link to showcase in the footer area." />
          <MultiSelectField errors={errors} values={values} setFieldValue={setFieldValue} name="help_center" title="Help Pages" data={helpCenter} helpertext="*Pick help center Link to showcase in the footer area." />
          <SimpleInputField
            nameList={[
              { name: "[options][footer][support_number]", title: "support_number", placeholder: t("enter_support_number") },
              { name: "[options][footer][support_email]", title: "support_email", placeholder: t("enter_support_email") },
              { name: "[options][footer][play_store_url]", title: "play_store_url", placeholder: t("enter_play_store_url") },
              { name: "[options][footer][app_store_url]", title: "app_store_url", placeholder: t("enter_app_store_url") },
            ]}
          />
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="paymentOptionImage" title="payment_option_image" id="paymentOptionImage" showImage={values["paymentOptionImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1155x670px")} />
          <CheckBoxField name="[options][footer][social_media_enable]" title="social_media_enable" />
          {values["options"]?.["footer"]?.["social_media_enable"] && (
            <SimpleInputField
              nameList={[
                { name: "[options][footer][facebook]", title: "facebook", placeholder: t("enter_facebook_url") },
                { name: "[options][footer][instagram]", title: "instagram", placeholder: t("enter_instagram_url") },
                { name: "[options][footer][twitter]", title: "twitter", placeholder: t("enter_twitter_url") },
                { name: "[options][footer][pinterest]", title: "pinterest", placeholder: t("enter_pinterest_url") },
              ]}
            />
          )}
          <CheckBoxField name="[options][footer][footer_copyright]" title="footer_copyright" />
          {values?.["options"]?.["footer"]?.["footer_copyright"] && <SimpleInputField nameList={[{ name: "[options][footer][copyright_content]", type: "textarea", title: "copyright_text", placeholder: t("enter_copyright_text") }]} />}
        </Col>
      </Row>
    </>
  );
};

export default FooterTab;
