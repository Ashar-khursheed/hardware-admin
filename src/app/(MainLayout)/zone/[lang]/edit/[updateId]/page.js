'use client'
import ZoneForm from "@/Components/Zone/ZoneForm";
import LanguageContext from "@/Helper/LanguageContext";
import { ZoneApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import React, { useContext, useEffect } from "react";

const ZoneUpdate = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);
  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(ZoneApi, updateId, "/zone");
  return (
    updateId && (
      <FormWrapper title="edit_zone" lang={lang}>
        <ZoneForm
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
export default ZoneUpdate;
