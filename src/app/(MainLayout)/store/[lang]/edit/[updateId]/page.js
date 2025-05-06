'use client'

import StoreForm from "@/Components/Store/StoreForm";
import LanguageContext from "@/Helper/LanguageContext";
import { store } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";
import { useContext, useEffect } from "react";

const StoreUpdate = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useCreate(store, updateId, "/store");
  return (
    updateId && (
      <FormWrapper title="edit_store" lang={lang}>
        <StoreForm mutate={mutate} updateId={updateId} loading={isLoading} buttonName="Update" language={lang}/>
      </FormWrapper>
    )
  );
};

export default StoreUpdate;
