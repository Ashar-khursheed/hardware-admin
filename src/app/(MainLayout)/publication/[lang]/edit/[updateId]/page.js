"use client";
import PublicationForm from "@/Components/Publication/PublicationForm";
import LanguageContext from "@/Helper/LanguageContext";
import { PublicationApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const UpdatePublication = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(PublicationApi, updateId, `/publication`);
  return (
    updateId && (
      <FormWrapper title="edit_publication" lang={lang}>
        <PublicationForm
          mutate={mutate}
          updateId={updateId}
          loading={isLoading}
          buttonName="update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default UpdatePublication;