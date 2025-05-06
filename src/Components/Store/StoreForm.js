import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { store } from "../../Utils/AxiosUtils/API";
import { getHelperText } from '../../Utils/CustomFunctions/getHelperText';
import { YupObject, passwordConfirmationSchema, passwordSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import AddressComponent from "../InputFields/AddressComponent";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { StoreInitialValue } from "./Widgets/StoreInitialValue";
import { StoreValidationSchema } from "./Widgets/StoreValidationSchema";
import StoreVendor from "./Widgets/StoreVendor";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import LanguageRedirection from "../CommonComponent/LanguageRedirection";
import { generateSlug } from "@/Utils/CustomFunctions/SlugName";

const StoreForm = ({ mutate, updateId, loading, buttonName,language }) => {
  
  const { t } = useTranslation( 'common');
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery(["store/id"], () => request({ url: store + "/" + updateId },router), {
    refetchOnMount: false, refetchOnWindowFocus: false, enabled: false, select: (data) => (data?.data),
  });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...StoreInitialValue(updateId, oldData) }}
        validationSchema={YupObject({
          ...StoreValidationSchema,
          password: !updateId && passwordSchema,
          password_confirmation: !updateId && passwordConfirmationSchema,
        })}
        onSubmit={(values) => {
          if (updateId) {
            delete values["password"];
            delete values["password_confirmation"];
            typeof values["store_logo"] == "string" && delete values["store_logo"];
            values["_method"] = "put";
          }
          delete values["store_logo"];
          values["status"] = Number(values["status"]);
          values["hide_vendor_phone"] = Number(values["hide_vendor_phone"]);
          values["hide_vendor_email"] = Number(values["hide_vendor_email"]);
          if (values['store_logo_id'] == undefined) values['store_logo_id'] = null
          mutate(values);
        }}>
        {({ setFieldValue, values, errors, touched }) => {
           useEffect(() => {
            if (values.store_name && !updateId && !values.slug) {
              setFieldValue("slug", generateSlug(values.store_name));
            }
          }, [values.store_name, setFieldValue, updateId, values.slug]);
          return(
          <Form className="theme-form theme-form-2 mega-form">
              {updateId && <LanguageRedirection id={updateId} path={'/store'} language={language}/>}
            <Row>
              <FileUploadField values={values} setFieldValue={setFieldValue} title="store_logo" type="file" id="store_logo_id" name="store_logo_id" updateId={updateId} errors={errors} touched={touched} helpertext={getHelperText('500x500px')} />
              <SimpleInputField nameList={[ { name: "store_name", placeholder: t("enter_store_name"), require: "true", value: values.store_name, onChange: (e) => {setFieldValue("store_name", e.target.value); if (!updateId) { setFieldValue("slug", generateSlug(e.target.value));}},},
                { name: "slug", placeholder: t("enter_slug"), value: values.slug, onChange: (e) => setFieldValue("slug", e.target.value)}, { name: "description", title: "store_description", type: "textarea", placeholder: t("enter_description"), require: "true" }]} />
              <AddressComponent values={values} />
              <StoreVendor />
              <div>
                {!updateId && (
                    <>
                        <SimpleInputField
                            nameList={[
                                { name: "password", type: "password", placeholder: t("enter_password"), require: 'true' },
                                { name: "password_confirmation", title: "confirm_password", type: "password", placeholder: t("enter_confirm_password"), require: 'true' },
                            ]}
                        />
                    </>
                )}
            </div>
              <SimpleInputField nameList={[
                { name: "facebook", type: "url", placeholder: t("enter_facebook_url") },
                { name: "pinterest", type: "url", placeholder: t("enter_pinterest_url") },
                { name: "instagram", type: "url", placeholder: t("enter_instagram_url") },
                { name: "twitter", type: "url", placeholder: t("enter_twitter_url") },
                { name: "youtube", type: "url", placeholder: t("enter_youtube_url") },
              ]} />
              <CheckBoxField name="hide_vendor_email" title="hide_email" />
              <CheckBoxField name="hide_vendor_phone" title="hide_phone" />
              <CheckBoxField name="status" />
              <FormBtn loading={loading} buttonName={buttonName}/>
            </Row>
          </Form>
        )}}
      </Formik>
    </>
  );
};

export default StoreForm;
