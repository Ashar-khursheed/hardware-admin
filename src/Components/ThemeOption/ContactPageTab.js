import { useTranslation } from "react-i18next";
import SimpleInputField from "../InputFields/SimpleInputField";
import ContactWrapper from "./ContactWrapper";

const ContactPageTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: "[options][contact_us][title]",  title: "title", placeholder: t("enter_title") },
          { name: "[options][contact_us][description]", type: "textarea", title: "description", placeholder: t("enter_description") },
        ]}
      />
      <ContactWrapper contactDetails={{ value: "detail_1", title: "detail_1" }} />
      <ContactWrapper contactDetails={{ value: "detail_2", title: "detail_2" }} />
      <ContactWrapper contactDetails={{ value: "detail_3", title: "detail_3" }} />
      <ContactWrapper contactDetails={{ value: "detail_4", title: "detail_4" }} />
    </>
  );
};
export default ContactPageTab;
