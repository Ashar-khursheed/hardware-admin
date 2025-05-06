"use client";
import AttributeForm from "@/Components/Attribute/AttributeForm";
import LanguageContext from "@/Helper/LanguageContext";
import { attribute } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const UpdateAttributes = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(attribute,updateId,`/attribute`);
  return (
   updateId && (
      <FormWrapper title="edit_attribute" lang={lang}>
        <AttributeForm
          mutate={mutate}
          updateId={updateId}
          loading={isLoading}
          buttonName="Update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default UpdateAttributes;
