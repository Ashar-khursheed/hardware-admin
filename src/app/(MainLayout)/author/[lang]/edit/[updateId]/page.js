"use client";
import AuthorForm from "@/Components/Author/AuthorForm";
import LanguageContext from "@/Helper/LanguageContext";
import {  AuthorApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const UpdateAuthor = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(AuthorApi, updateId, `/author`);
  return (
    updateId && (
      <FormWrapper title="edit_author" lang={lang}>
        <AuthorForm
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

export default UpdateAuthor;