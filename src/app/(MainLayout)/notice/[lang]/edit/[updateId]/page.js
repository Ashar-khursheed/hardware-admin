"use client";

import NoticeForm from "@/Components/Notice/NoticeForm";
import LanguageContext from "@/Helper/LanguageContext";
import { Notice } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const NoticeUpdate = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(Notice, updateId, `/notice`);
  return (
    updateId && (
      <FormWrapper title="update_notice" lang={lang}>
        <NoticeForm
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

export default NoticeUpdate;
