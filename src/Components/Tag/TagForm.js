import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Row } from "reactstrap";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { YupObject, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import LanguageRedirection from "../CommonComponent/LanguageRedirection";
import { generateSlug } from "@/Utils/CustomFunctions/SlugName";

const TagForm = ({ mutate, updateId, loading, type,buttonName,language }) => {
  
  const { t } = useTranslation( 'common');
  const router = useRouter();
  const { data: oldData, isLoading, refetch } = useQuery(["role/id"], () => request({ url: `tag/${updateId}` },router), { refetchOnMount: false, enabled: false });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.data?.name || "" : "",
        slug: updateId ? oldData?.data?.slug || "" : "",
        type: type,
        description: updateId ? oldData?.data?.description : "",
        status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
      }}
      validationSchema={YupObject({ name: nameSchema })}
      onSubmit={(values) => mutate({ ...values, status: Number(values.status) })}>
      {({setFieldValue, values}) => {
         useEffect(() => {
          if (values.name && !updateId && !values.slug) {
            setFieldValue("slug", generateSlug(values.name));
          }
        }, [values.name, setFieldValue, updateId, values.slug]);
        return(
        <Form className="theme-form theme-form-2 mega-form">
          {updateId && <LanguageRedirection id={updateId} path={'/tag'} language={language}/>}
          <Row>
            <SimpleInputField nameList={[ { name: "name", placeholder: t("enter_tag_name"), require: "true", value: values.name, onChange: (e) => {setFieldValue("name", e.target.value); if (!updateId) { setFieldValue("slug", generateSlug(e.target.value));}},},
              { name: "slug", placeholder: t("enter_slug"), value: values.slug, onChange: (e) => setFieldValue("slug", e.target.value)}, { name: 'description', type: 'textarea', title: 'description', placeholder: t("enter_description") }]} />
            <CheckBoxField name="status" />
            <FormBtn loading={loading} buttonName={buttonName}/>
          </Row>
        </Form>
      )}}
    </Formik>
  );
};

export default TagForm;
